import CodeEditor from "@/components/workspace/CodeEditor";
import RightPanel from "@/components/workspace/RightPanel";

export default function WorkspaceContent() {
  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Code Editor */}
      <div className="w-[62%]">
        <CodeEditor />
      </div>

      {/* Right Panel */}
      <div className="w-[38%]">
        <RightPanel />
      </div>
    </div>
  );
}