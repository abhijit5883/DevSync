import WorkspaceWindow from "@/components/workspace/WorkspaceWindow";
import WorkspaceHeader from "@/components/workspace/WorkspaceHeader";
import WorkspaceContent from "@/components/workspace/WorkspaceContent";

export default function HeroWorkspace() {
  return (
    <div className="relative">

      {/* Argentina Inspired Background Glow */}

      <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl" />

      <div className="absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

      {/* Workspace */}

      <div
        className="
          relative
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-[0_40px_100px_rgba(15,23,42,0.20)]
        "
      >
        <WorkspaceWindow>
          <WorkspaceHeader />
          <WorkspaceContent />
        </WorkspaceWindow>
      </div>
    </div>
  );
}