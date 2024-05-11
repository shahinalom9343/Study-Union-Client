import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import AllAssignments from "../Pages/AllAssignments";
import CreateAssignments from "../Pages/CreateAssignments";
import PendingAssignments from "../Pages/PendingAssignments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/assignments",
        element: <AllAssignments></AllAssignments>,
      },
      {
        path: "/createassignments",
        element: <CreateAssignments></CreateAssignments>,
      },
      {
        path: "/pendingassignments",
        element: <PendingAssignments></PendingAssignments>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
