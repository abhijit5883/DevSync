import BrandLogo from "@/components/common/BrandLogo";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const links = [
  {
    title: "Product",
    items: [
      "Features",
      "Workspace",
      "AI Assistant",
      "Roadmap",
    ],
  },
  {
    title: "Resources",
    items: [
      "Documentation",
      "Github",
      "Support",
      "Contact",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}

          <div>
            <BrandLogo />

            <p className="mt-6 max-w-sm leading-7 text-slate-600">
              DevSync brings developers together in one
              collaborative workspace for coding,
              communication, meetings and AI assistance.
            </p>

            <div className="mt-8 flex gap-3">

              <a
                href="#"
                className="rounded-xl border p-3 transition hover:border-sky-300 hover:bg-sky-50"
              >
                <Github size={18} />
              </a>

              <a
                href="#"
                className="rounded-xl border p-3 transition hover:border-sky-300 hover:bg-sky-50"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#"
                className="rounded-xl border p-3 transition hover:border-sky-300 hover:bg-sky-50"
              >
                <Mail size={18} />
              </a>

            </div>
          </div>

          {/* Links */}

          {links.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-slate-900">
                {group.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {group.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex items-center gap-2 text-slate-600 transition hover:text-sky-600"
                    >
                      {item}

                      <ArrowUpRight
                        size={15}
                        className="opacity-0 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © 2026 DevSync. All rights reserved.
          </p>

          <p>
            Where Developers Sync.
          </p>

        </div>
      </div>
    </footer>
  );
}