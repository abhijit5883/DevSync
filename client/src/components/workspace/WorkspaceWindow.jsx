export default function WorkspaceWindow({ children }) {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white/90
        backdrop-blur-md
        shadow-[0_30px_80px_rgba(15,23,42,0.18)]
      "
    >
      {children}
    </div>
  );
}