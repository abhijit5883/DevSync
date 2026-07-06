import FeatureGrid from "./FeatureGrid";

export default function Features() {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
            rounded-full
            bg-sky-100
            px-4
            py-2
            text-sm
            font-semibold
            text-sky-700
            "
          >
            Everything Your Team Needs
          </span>

          <h2
            className="
            mt-6
            text-4xl
            font-bold
            tracking-tight
            text-slate-900
            lg:text-5xl
            "
          >
            One Platform.
            <br />
            Endless Collaboration.
          </h2>

          <p
            className="
            mt-6
            text-lg
            leading-8
            text-slate-600
            "
          >
            Stop switching between tools.
            DevSync brings coding, communication,
            meetings and AI into one beautiful workspace.
          </p>

        </div>

        <FeatureGrid />

      </div>

    </section>
  );
}