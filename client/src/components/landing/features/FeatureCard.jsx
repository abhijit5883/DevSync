import { ArrowUpRight } from "lucide-react";

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-6
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-sky-200
      hover:shadow-[0_25px_70px_rgba(14,165,233,0.12)]
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        -right-12
        -top-12
        h-32
        w-32
        rounded-full
        bg-sky-100/40
        blur-3xl
        opacity-0
        transition
        group-hover:opacity-100
        "
      />

      {/* Icon */}

      <div
        className="
        mb-6
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-sky-100
        text-sky-600
        "
      >
        <Icon size={28} />
      </div>

      {/* Title */}

      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between">

        <span className="text-sm font-medium text-sky-600">
          Learn more
        </span>

        <ArrowUpRight
          className="
          transition-transform
          group-hover:translate-x-1
          group-hover:-translate-y-1
          "
          size={18}
        />

      </div>
    </div>
  );
}