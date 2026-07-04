import { NAV_LINKS } from "@/constants/navigation";

export default function NavLinks({ mobile = false }) {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <a
          key={link.title}
          href={link.href}
          className={`
            relative font-medium transition-all duration-300
            hover:text-sky-500
            after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-0
            after:bg-sky-500
            after:transition-all after:duration-300
            hover:after:w-full
            ${mobile ? "text-lg py-2" : "text-sm"}
          `}
        >
          {link.title}
        </a>
      ))}
    </>
  );
}