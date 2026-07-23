import BrandLogo from "@/components/common/BrandLogo";
import HeroWorkspace from "@/components/landing/hero/HeroWorkspace";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10">

        {/* Left */}

        <div className="hidden w-1/2 lg:block">
          <BrandLogo />

          <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900">
            Welcome to
            <br />
            DevSync.
          </h1>

          <p className="mt-5 max-w-md text-lg leading-8 text-slate-600">
            Where Developers Sync.
          </p>

          <div className="mt-10 scale-90 origin-left">
            <HeroWorkspace />
          </div>
        </div>

        {/* Right */}

        <div className="flex flex-1 items-center justify-center">
          {children}
        </div>

      </div>
    </div>
  );
}