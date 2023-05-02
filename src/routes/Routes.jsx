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
      },
    ],
  },
  {
    path: "shef",
    element: <ShefsLayout></ShefsLayout>,
    children: [
      {
        path: ":id",
        element: <ShefRecipie></ShefRecipie>,
      },
    ],
  },
]);

export default router;
