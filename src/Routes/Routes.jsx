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
import PrivateRoutes from "./PrivateRoutes";
import AssignmentDetails from "../Pages/AssignmentDetails";
import SubmissionForm from "../Pages/SubmissionForm";
import UpdateAssignment from "../Pages/UpdateAssignment";
import MySubmitted from "../Pages/MySubmitted";

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
        loader: () =>
          fetch("https://study-union-server.vercel.app/assignments"),
      },
      {
        path: "/createassignments",
        element: <CreateAssignments></CreateAssignments>,
      },
      {
        path: "/assignmentDetails/:id",
        element: (
          <PrivateRoutes>
            <AssignmentDetails></AssignmentDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://study-union-server.vercel.app/${params.id}`),
      },
      {
        path: "/submission",
        element: <SubmissionForm></SubmissionForm>,
      },
      {
        path: "/pendingassignments",
        element: (
          <PrivateRoutes>
            <PendingAssignments></PendingAssignments>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://study-union-server.vercel.app/mysubmitted"),
      },
      {
        path: "/updateAssignment/:id",
        element: (
          <PrivateRoutes>
            <UpdateAssignment></UpdateAssignment>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://study-union-server.vercel.app/${params.id}`),
      },
      {
        path: "/mysubmitted",
        element: <MySubmitted></MySubmitted>,
        loader: () =>
          fetch("https://study-union-server.vercel.app/mysubmitted"),
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
