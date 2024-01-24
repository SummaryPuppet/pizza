import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";

const screens = {
  Home: lazy(() => import("@/screens/Home")),
  Dashboard: lazy(() => import("@/screens/Dashboard")),
  PageNotFound: lazy(() => import("@/screens/Errors/PageNotFound")),

  // Auth
  Register: lazy(() => import("@/screens/Auth/Register")),
  Login: lazy(() => import("@/screens/Auth/Login")),

  // Ingredients
  AllIngredients: lazy(() => import("@/screens/Ingredient/AllIngredients")),
  OneIngredient: lazy(() => import("@/screens/Ingredient/OneIngredient")),
  CreateIngredient: lazy(() => import("@/screens/Ingredient/CreateIngredient")),

  // Products
  CreateProduct: lazy(() => import("@/screens/Product/CreateProduct")),
  OneProduct: lazy(() => import("@/screens/Product/OneProduct")),
  AllProducts: lazy(() => import("@/screens/Product/AllProducts")),
};

export const routes = [
  {
    path: "/",
    element: <screens.Home />,
    name: "home",
    category: "",
  },

  {
    path: "/register",
    element: <screens.Register />,
    name: "",
    category: "auth",
  },
  {
    path: "/login",
    element: <screens.Login />,
    name: "",
    category: "auth",
  },

  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/dashboard",
        element: <screens.Dashboard />,
        name: "dashboard",
        category: "",
      },

      {
        path: "/ingredients",
        element: <screens.AllIngredients />,
        name: "ingredients",
        category: "ingredient",
      },
      {
        path: "/ingredient/:id",
        element: <screens.OneIngredient />,
        name: "ingredient",
        category: "ingredient",
      },
      {
        path: "/ingredient/create",
        element: <screens.CreateIngredient />,
        name: "create ingredients",
        category: "ingredient",
      },

      {
        path: "/products/",
        element: <screens.AllProducts />,
        name: "products",
        category: "product",
      },
      {
        path: "/product/:id",
        element: <screens.OneProduct />,
        name: "create product",
        category: "product",
      },
      {
        path: "/product/create",
        element: <screens.CreateProduct />,
        name: "create product",
        category: "product",
      },
    ],
  },

  {
    path: "*",
    element: <screens.PageNotFound />,
    name: "",
    category: "error",
  },
];

export const router = createBrowserRouter(routes);
