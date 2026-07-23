import { useParams } from "react-router-dom";

export default function WorkspacePage() {
  const { workspaceId } = useParams();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">
        Workspace: {workspaceId}
      </h1>
    </div>
  );
}