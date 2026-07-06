import {
  Code2,
  MessageSquare,
  Bot,
  Video,
  GitBranch,
} from "lucide-react";

const tabs = [
  {
    icon: Code2,
    label: "Editor",
    active: true,
  },
  {
    icon: MessageSquare,
    label: "Chat",
  },
  {
    icon: Bot,
    label: "AI",
  },
  {
    icon: Video,
    label: "Meeting",
  },
  {
    icon: GitBranch,
    label: "Git",
  },
];

export default function WorkspaceHeader() {
  return (
    <>
      <div className="flex items-center justify-between border-b bg-white/80 backdrop-blur-md px-5 py-3">

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <h3 className="font-semibold text-slate-700">
          DevSync Workspace
        </h3>

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

          <span className="text-xs font-medium text-slate-500">
            Connected
          </span>
        </div>

      </div>

      <div className="flex items-center gap-2 border-b bg-white px-4 py-3">

        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <button
              key={tab.label}
              className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition-all ${
                tab.active
                  ? "bg-sky-100 text-sky-700"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              <Icon size={16} />

              {tab.label}
            </button>
          );
        })}

      </div>
    </>
  );
}