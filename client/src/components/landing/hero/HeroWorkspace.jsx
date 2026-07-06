import WorkspaceWindow from "./workspace/WorkspaceWindow";
import WorkspaceHeader from "./workspace/WorkspaceHeader";
import WorkspaceSidebar from "./workspace/WorkspaceSidebar";
import WorkspaceContent from "./workspace/WorkspaceContent";
import FloatingCard from "./workspace/FloatingCard";

export default function HeroWorkspace() {
  return (
    <div className="relative">
      <div className="transition-transform duration-500 hover:-translate-y-2 hover:rotate-1">
        <WorkspaceWindow>
          <WorkspaceHeader />

          <div className="flex h-[520px]">
            <WorkspaceSidebar />

            <WorkspaceContent />
          </div>
        </WorkspaceWindow>
      </div>

      <FloatingCard />
    </div>
  );
}
