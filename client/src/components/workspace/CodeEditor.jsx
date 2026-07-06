import { ChevronDown, FileCode2, FolderOpen } from "lucide-react";

const codeLines = [
  {
    no: 1,
    parts: [
      { text: "import", className: "text-purple-400" },
      { text: " { Workspace } ", className: "text-sky-300" },
      { text: "from", className: "text-purple-400" },
      { text: " '@devsync/core';", className: "text-emerald-300" },
    ],
  },

  {
    no: 2,
    parts: [{ text: "", className: "text-slate-300" }],
  },

  {
    no: 3,
    parts: [
      { text: "function", className: "text-purple-400" },
      { text: " App", className: "text-yellow-300" },
      { text: "() {", className: "text-slate-200" },
    ],
  },

  {
    no: 4,
    parts: [
      { text: "  return ", className: "text-purple-400" },
      { text: "(", className: "text-slate-200" },
    ],
  },

  {
    no: 5,
    parts: [
      { text: "    <Workspace", className: "text-sky-300" },
    ],
  },

  {
    no: 6,
    parts: [
      { text: "      collaboration", className: "text-orange-300" },
    ],
  },

  {
    no: 7,
    parts: [
      { text: "      ai", className: "text-orange-300" },
    ],
  },

  {
    no: 8,
    parts: [
      { text: "      meetings", className: "text-orange-300" },
    ],
  },

  {
    no: 9,
    parts: [
      { text: "    />", className: "text-sky-300" },
    ],
  },

  {
    no: 10,
    parts: [
      { text: "  );", className: "text-slate-200" },
    ],
  },

  {
    no: 11,
    parts: [
      { text: "}", className: "text-slate-200" },
    ],
  },
];

export default function CodeEditor() {
  return (
    <div className="flex-1 bg-[#0f172a] text-sm">
      {/* File Explorer */}
      <div className="flex items-center justify-between border-b border-slate-700 px-5 py-3">
        <div className="flex items-center gap-2 text-slate-300">
          <FolderOpen size={16} />

          <span>src</span>

          <ChevronDown size={15} />
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-1 text-slate-300">
          <FileCode2 size={15} />

          <span>App.jsx</span>
        </div>
      </div>

      {/* Code */}

      <div className="space-y-1 p-5 font-mono">
        {codeLines.map((line) => (
  <div key={line.no} className="flex">
    <span className="mr-6 w-6 select-none text-right text-slate-500">
      {line.no}
    </span>

    <span>
      {line.parts.map((part, index) => (
        <span key={index} className={part.className}>
          {part.text}
        </span>
      ))}

      {line.no === codeLines.length && (
        <span className="animate-pulse text-sky-400">|</span>
      )}
    </span>
  </div>
))}
      </div>
    </div>
  );
}
