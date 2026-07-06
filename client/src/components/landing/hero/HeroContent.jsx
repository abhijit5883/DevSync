import HeroButtons from "./HeroButtons";
import HeroHighlights from "./HeroHighlights";

export default function HeroContent() {
  return (
    <div>
      <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
        ✨ One Workspace. Infinite Collaboration.
      </span>

      <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 lg:text-7xl">
        Build Better
        <br />
        Software,
        <br />
        Together.
      </h1>

      <p className="mt-4 text-xl font-semibold text-sky-600">
        Where Developers Sync.
      </p>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
        Code, communicate, review, meet, and collaborate
        without switching between multiple tools.
      </p>

      <HeroButtons />

      <HeroHighlights />
    </div>
  );
}