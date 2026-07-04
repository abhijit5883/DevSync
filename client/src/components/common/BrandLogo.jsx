import { Code2 } from "lucide-react";

export default function BrandLogo() {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500 shadow-md transition-transform duration-300 hover:scale-105">
        <Code2 className="h-6 w-6 text-white" />
      </div>

      <div>
        <h1 className="text-xl font-extrabold tracking-tight">
          DevSync
        </h1>

        <p className="text-xs text-sky-500 font-medium">
          Where Developers Sync.
        </p>
      </div>
    </div>
  );
}