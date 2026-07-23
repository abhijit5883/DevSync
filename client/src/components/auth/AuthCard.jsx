export default function AuthCard({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">

      <h2 className="text-3xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-3 text-slate-600">
        {subtitle}
      </p>

      <div className="mt-8">
        {children}
      </div>

    </div>
  );
}