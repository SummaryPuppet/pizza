import { Link } from "react-router-dom";
import MenuSideBarItem from "./MenuSideBarItem";
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

        <MenuSideBarItem
          title={
            <>
              <IngredientIcon />
              Ingredients
            </>
          }
        >
          <li>
            <Link to={"/ingredients"}>All Ingredients</Link>
          </li>
          <li>
            <Link to={"/ingredient/create"}>Create Ingredient</Link>
          </li>
        </MenuSideBarItem>

        <MenuSideBarItem title={"Products"}>
          <li>
            <Link to={"/products"}>All Products</Link>
          </li>
          <li>
            <Link to={"/product/create"}>Create Product</Link>
          </li>
        </MenuSideBarItem>

        <MenuSideBarItem
          title={
            <>
              <TransferIcon />
              Transactions
            </>
          }
        >
          <li>
            <Link to={"/transactions"}>All Transactions</Link>
          </li>
        </MenuSideBarItem>

        <MenuSideBarItem title={"Waiters"}>
          <li>
            <Link to={"/waiters"}>All Waiters</Link>
          </li>
          <li>
            <Link to={"/waiter/add"}>Add Waiter</Link>
          </li>
        </MenuSideBarItem>

        <MenuSideBarItem title={"Tables"}>
          <li>
            <Link to={""}>All Tables</Link>
          </li>
          <li>
            <Link to={""}>Add Table</Link>
          </li>
        </MenuSideBarItem>
      </ul>
    </aside>
  );
}

export default MenuSideBar;
