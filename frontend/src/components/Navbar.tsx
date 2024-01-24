import { Link } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";
import ThemeController from "./ThemeController";
import HamburgerMenu from "./icons/HamburgerMenu";

function Navbar() {
  return (
    <nav className="navbar bg-base-300">
      <div className="flex-none">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <HamburgerMenu />
        </label>
      </div>
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          Pizzeta System
        </Link>
      </div>
      <div className="flex-none">
        <ThemeController />
      </div>
      <NavbarDropdown />
    </nav>
  );
}

export default Navbar;
