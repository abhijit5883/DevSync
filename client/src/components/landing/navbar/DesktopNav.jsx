import NavLinks from "./NavLinks";
import { Button } from "@/components/ui/button";

export default function DesktopNav() {
  return (
    <div className="hidden items-center gap-10 md:flex">
      <nav className="flex items-center gap-8">
        <NavLinks />
      </nav>

      <div className="flex items-center gap-3">
        <Button variant="ghost">
          Sign In
        </Button>

        <Button className="rounded-xl bg-sky-500 hover:bg-sky-600">
          Get Started
        </Button>
      </div>
    </div>
  );
}