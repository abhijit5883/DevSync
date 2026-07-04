import BrandLogo from "@/components/common/BrandLogo";
import DesktopNav from "./DesktopNav";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <BrandLogo />

        <DesktopNav />

        <button className="rounded-lg p-2 hover:bg-slate-100 md:hidden">
          <Menu className="h-6 w-6" />
        </button>

      </div>
    </header>
  );
}