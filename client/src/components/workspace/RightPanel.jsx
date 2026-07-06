import { Bot } from "lucide-react";

const members = [
  {
    name: "Abhijit",
    status: "Coding",
    color: "bg-sky-100 text-sky-700",
  },
  {
    name: "Rahul",
    status: "Reviewing",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Sneha",
    status: "In Meeting",
    color: "bg-violet-100 text-violet-700",
  },
];

export default function RightPanel() {
  return (
    <div className="hidden w-80 flex-col border-l border-slate-200 bg-slate-50 lg:flex">
      {/* Team */}

      <div className="p-5">
        <h3 className="mb-4 text-sm font-semibold text-slate-700">
          👥 Team Online
        </h3>

        <div className="space-y-3">
          {members.map((member) => (
            <div
              key={member.name}
              className="rounded-xl bg-white p-3 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full font-semibold ${member.color}`}
                  >
                    {member.name.charAt(0)}
                  </div>

                  <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                </div>

                <div>
                  <p className="font-medium text-slate-800">
                    {member.name}
                  </p>

                  <p className="text-xs text-slate-500">
                    {member.status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Card */}

      <div className="mx-5 rounded-2xl border bg-white p-4 shadow-sm">
        <div className="mb-3">
          <span className="rounded-full bg-sky-100 px-2 py-1 text-xs font-semibold text-sky-700">
            ✨ Suggestion
          </span>
        </div>

        <div className="mb-3 flex items-center gap-2">
          <Bot size={18} className="text-sky-500" />

          <h3 className="font-semibold text-slate-800">
            DevSync AI
          </h3>
        </div>

        <p className="text-sm leading-6 text-slate-600">
          Extract{" "}
          <span className="font-medium text-sky-600">
            HeroButtons
          </span>{" "}
          into a reusable component.
        </p>

        <div className="mt-4 flex gap-2">
          <button className="rounded-xl bg-sky-500 px-3 py-2 text-sm text-white transition hover:bg-sky-600">
            Accept
          </button>

          <button className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100">
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
}