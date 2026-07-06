export default function WorkspaceContent() {
  return (
    <div className="flex flex-1">

      {/* Editor Area */}
      <div className="flex-1 bg-white p-6">

        <div className="mb-4 flex items-center gap-2">
          <div className="rounded-lg bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
            main.jsx
          </div>

          <div className="rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-500">
            App.jsx
          </div>
        </div>

        <div className="rounded-2xl bg-slate-900 p-6 font-mono text-sm leading-8 text-slate-300">

{`function App() {

  return (

    <Workspace />

  );

}`}

        </div>

      </div>

      {/* Right Panel */}

      <div className="hidden w-64 border-l bg-slate-50 p-5 xl:block">

        <h3 className="font-semibold">
          Team Members
        </h3>

        <div className="mt-5 space-y-4">

          <Member
            name="Abhijit"
            status="Coding"
          />

          <Member
            name="Rahul"
            status="Meeting"
          />

          <Member
            name="Sneha"
            status="Reviewing"
          />

        </div>

      </div>

    </div>
  );
}

function Member({ name, status }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white p-3 shadow-sm">

      <div>

        <p className="font-medium">
          {name}
        </p>

        <p className="text-xs text-slate-500">
          {status}
        </p>

      </div>

      <div className="h-3 w-3 rounded-full bg-emerald-500" />

    </div>
  );
}