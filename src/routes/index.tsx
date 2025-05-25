import { createBrowserRouter } from "react-router-dom";
import Login from "@Pages/Login";
import RedirectRoute from "./RedirectRoutes";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "@Pages/Dashboard";
import Customer from "@Pages/Customer";
import Orders from "@Pages/Orders";
import Products from "@Pages/Products";
import Categories from "@Pages/Categories";
import Payments from "@Pages/Payments";

export default createBrowserRouter([
  {
    path: "/signin",
    element: (
      <RedirectRoute>
        <Login />
      </RedirectRoute>
    ),
  },
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/customers",
        element: <Customer />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/payments",
        element: <Payments />,
      },
    ],
  },
]);
