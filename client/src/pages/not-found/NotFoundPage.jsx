import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-7xl font-bold text-slate-900">
        404
      </h1>

      <p className="text-slate-600">
        Page not found.
      </p>

      <Link
        to="/"
        className="rounded-xl bg-sky-500 px-5 py-3 text-white hover:bg-sky-600"
      >
        Back Home
      </Link>
    </div>
  );
}