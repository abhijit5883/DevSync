export default function SectionHeading({
  badge,
  title,
  description,
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {badge && (
        <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        {description}
      </p>
    </div>
  );
}