import { Link } from "react-router-dom";
import DashboardIcon from "./icons/Dashboard";
import IngredientIcon from "./icons/Ingredient";
import TransferIcon from "./icons/Transfer";

function MenuSideBar() {
  return (
    <aside className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu min-h-full w-80 rounded-box bg-base-200 p-4">
        <li>
          <Link to={"/dashboard"}>
            <DashboardIcon />
            Dashboard
          </Link>
        </li>

        <li>
          <details>
            <summary>
              <IngredientIcon />
              Ingredients
            </summary>

            <ul>
              <li>
                <Link to={"/ingredients"}>All Ingredients</Link>
                <Link to={"/ingredient/create"}>Create Ingredient</Link>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>Products</summary>

            <ul>
              <li>
                <Link to={"/products"}>All Products</Link>
                <Link to={"/product/create"}>Create Product</Link>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>
              <TransferIcon />
              Transactions
            </summary>

            <ul>
              <li>
                <Link to={"/transactions"}>All Transactions</Link>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </aside>
  );
}

export default MenuSideBar;
