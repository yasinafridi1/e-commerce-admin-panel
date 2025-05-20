import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import RedirectRoute from "./RedirectRoutes";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard";
import Customer from "../Pages/Customer";

export default createBrowserRouter([
  {
    path: "/signin",
    element: (
      <RedirectRoute>    
        <Login />
      </RedirectRoute>
    )
  },
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children:[
      { path:"/", element:<Dashboard/> },
      { path:"/dashboard", element:<Dashboard/> },
      { path:"/customer", element:<Customer/> }
    ]
  }
]);
