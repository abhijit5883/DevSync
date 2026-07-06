import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import BrandLogo from "@/components/common/BrandLogo";
import NavLinks from "./NavLinks";

export default function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              className="rounded-xl hover:bg-sky-100 transition-colors"
            />
          }
        >
          <Menu className="h-6 w-6" />
        </SheetTrigger>

        <SheetContent side="right" className="w-[320px] sm:w-[360px] p-0">
          <div className="flex h-full flex-col">
            {/* Brand */}
            <div className="border-b px-6 py-6">
              <BrandLogo />
            </div>

            {/* Navigation */}
            <div className="px-6 py-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Menu
              </p>

              <nav className="flex flex-col gap-2">
                <NavLinks mobile />
              </nav>
            </div>

            {/* CTA */}
            <div className="mt-auto border-t px-6 py-6">
              <div className="space-y-3">
                <Button className="w-full rounded-xl bg-sky-500 hover:bg-sky-600">
                  Get Started
                </Button>

                <Button variant="outline" className="w-full rounded-xl">
                  Sign In
                </Button>
              </div>

              <p className="mt-8 text-center text-xs text-slate-400">
                DevSync v0.1.0
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
