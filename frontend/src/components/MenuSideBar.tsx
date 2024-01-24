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
              </li>
              <li>
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
              </li>
              <li>
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

        <li>
          <details>
            <summary>Waiters</summary>

            <ul>
              <li>
                <Link to={"/waiters"}>All Waiters</Link>
              </li>
              <li>
                <Link to={"/waiter/add"}>Add Waiter</Link>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </aside>
  );
}

export default MenuSideBar;
