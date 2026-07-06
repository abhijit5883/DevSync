import { Bot, ShieldCheck, Zap } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Real-time Collaboration",
  },
  {
    icon: Bot,
    title: "AI Powered",
  },
  {
    icon: ShieldCheck,
    title: "Secure Workspaces",
  },
];

export default function HeroHighlights() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-8">
      {highlights.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="flex items-center gap-2"
          >
            <Icon className="h-5 w-5 text-sky-500" />

            <span className="text-sm font-medium text-slate-700">
              {item.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}