import { NAV_LINKS } from "@/constants/navigation";

export default function NavLinks({ mobile = false }) {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <a
          key={link.title}
          href={link.href}
          className={
            mobile
              ? `rounded-xl px-4 py-3 text-lg font-medium text-slate-700
                 transition-all duration-300
                 hover:bg-sky-50 hover:text-sky-600`
              : `relative text-sm font-medium text-slate-600 transition-all duration-300
                 hover:text-sky-500
                 after:absolute after:left-0 after:-bottom-1
                 after:h-[2px] after:w-0
                 after:bg-sky-500
                 after:transition-all after:duration-300
                 hover:after:w-full`
          }
        >
          {link.title}
        </a>
      ))}
    </>
  );
}