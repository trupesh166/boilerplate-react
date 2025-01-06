import { createBrowserRouter, NavLink, Outlet } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { AuthLayouts } from "@/layouts";
import { Login } from "@/pages";

const NuxHealthRoute = createBrowserRouter(
  /* All Paths */
  [
    {
      path: "/",
      children: [
        /* Website */
        {
          index: true,
          element: <NavLink to={"/login"}>Login</NavLink>,
        },
        /* AuthCation */
        {
          element: (
            <ProtectedRoute>
              <AuthLayouts />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "login",
              element: <Login />,
            },
          ],
        },
        /* Admin */
        {
          path: "admin",
          element: (
            <ProtectedRoute>
              <Outlet />
            </ProtectedRoute>
          ),
          children: [
            {
              index: true,
              element: " <AdminDashboard />",
            },
          ],
        },
      ],
    },
    {
      /* Default Route (404) */
      path: "*",
      element: <>404 - Page Not Found</>,
    },
  ],
  {
    /* Base URL */
    basename: "/",
  }
);

export default NuxHealthRoute;
