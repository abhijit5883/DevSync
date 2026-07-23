import NavLinks from "./NavLinks";
import { Button } from "@/components/ui/button";
import {Link} from "react-router-dom";


export default function DesktopNav() {
  return (
    <div className="hidden items-center gap-10 md:flex">
      <nav className="flex items-center gap-8">
        <NavLinks />
      </nav>

      <div className="flex items-center gap-3">
        <Link to="/login">
          <Button variant="outline">Sign In</Button>
        </Link>
        <Link to="/register">
          <Button>Get Started</Button>
        </Link>
      </div>
    </div>
  );
}
