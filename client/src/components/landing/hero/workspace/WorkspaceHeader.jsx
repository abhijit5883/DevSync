export default function WorkspaceHeader() {
  return (
    <div className="flex items-center justify-between border-b bg-slate-50 px-5 py-3">

      <div className="flex gap-2">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>

      <p className="text-sm font-semibold text-slate-600">
        DevSync Workspace
      </p>

      <div className="w-10" />

    </div>
  );
}