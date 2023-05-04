import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import ShefsLayout from "../layouts/ShefsLayout";
import ShefRecipie from "../pages/Shefs/ShefRecipie/ShefRecipie";
import Login from "../pages/Home/login/Login";
import Registration from "../pages/Home/registration/Registration";
import PrivateRouts from "./PrivateRouts";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Blog from "../pages/Home/blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(`https://taste-of-bengal-server-maufdev09.vercel.app/shef`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "chef",
    element: <ShefsLayout></ShefsLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRouts>
            <ShefRecipie></ShefRecipie>
          </PrivateRouts>
        ),
        loader: ({ params }) =>
          fetch(
            `https://taste-of-bengal-server-maufdev09.vercel.app/shef/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
