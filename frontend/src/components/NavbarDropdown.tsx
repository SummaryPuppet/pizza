import { useAuth } from "@/contexts/Auth";
import { Link } from "react-router-dom";
import DotMenu from "./icons/DotMenu";

function NavbarDropdown() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
          <DotMenu />
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
        >
          {isAuthenticated ? (
            <>
              <li>
                <Link to={""}>Account settings</Link>
              </li>
              <li>
                <Link to={""}>Log out</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavbarDropdown;
