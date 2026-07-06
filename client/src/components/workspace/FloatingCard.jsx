import { Bot } from "lucide-react";

export default function FloatingCard() {
  return (
    <div
      className="
      absolute
      -right-6
      bottom-8
      w-56
      rounded-2xl
      border
      bg-white/95
      p-4
      shadow-xl
      backdrop-blur
      "
    >
      <div className="mb-3 flex items-center gap-2">

        <Bot className="text-sky-500" />

        <p className="font-semibold">
          DevSync AI
        </p>

      </div>

      <p className="text-sm text-slate-500">
        Suggested a cleaner implementation for your component.
      </p>
    </div>
  );
}