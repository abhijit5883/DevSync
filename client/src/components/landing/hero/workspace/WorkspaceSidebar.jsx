import {
  MessageSquare,
  Code2,
  Bot,
  Video,
  FolderKanban,
} from "lucide-react";

const icons = [
  MessageSquare,
  Code2,
  Bot,
  Video,
  FolderKanban,
];

export default function WorkspaceSidebar() {
  return (
    <div className="flex w-16 flex-col items-center gap-6 border-r bg-slate-50 py-6">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className={`rounded-xl p-2 transition
          ${
            index === 1
              ? "bg-sky-500 text-white"
              : "text-slate-500 hover:bg-slate-200"
          }`}
        >
          <Icon size={20} />
        </div>
      ))}
    </div>
  );
}