import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from "../components/LayOuts/public/public.route";
import Login from "../components/pages/users/Login";
import AdminLayout from "../components/LayOuts/admin/AdminLayout";
import ManageRentals from "../components/LayOuts/admin/pages/ManageRentals";
import ManageUsers from "../components/LayOuts/admin/pages/ManageUsers";
import Profile from "../components/pages/Profile";
import ContactPage from "../components/pages/ContactPage";
import SearchResults from "../components/pages/SearchResults";
import CategoryResult from "../components/pages/CategoryResult";
import AboutPage from "../components/pages/AboutPage";
import AdminRoute from "../components/LayOuts/admin/Rouutes/AdminRoute";
import AdminDashboard from "../components/LayOuts/admin/Rouutes/AdminDashboard";
import ManageBikes from "../components/LayOuts/admin/pages/MangeBike";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoutes />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminRoute />, 
    children: [
      {
        element: <AdminLayout />,
        children: [
          { path: "", element: <AdminDashboard /> },
          { path: "/admin/bikes", element: <ManageBikes /> },
          { path: "/admin/rentals", element: <ManageRentals /> },
          { path: "/admin/users", element: <ManageUsers /> },
        ],
      },
    ],
  },
  { path: "/profile", element: <Profile /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/search", element: <SearchResults /> },
  { path: "/searchByCategory", element: <CategoryResult /> },
  { path: "/about", element: <AboutPage /> },
]);

export default router;
