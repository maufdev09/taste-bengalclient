import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import ShefsLayout from "../layouts/ShefsLayout";
import ShefRecipie from "../pages/Shefs/ShefRecipie/ShefRecipie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/shef`),
      },
    ],
  },
  {
    path: "chef",
    element: <ShefsLayout></ShefsLayout>,
    children: [
      {
        path: ":id",
        element: <ShefRecipie></ShefRecipie>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/shef/${params.id}`),
      },
    ],
  },
]);

export default router;
