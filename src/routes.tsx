import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { url } from "./config/url";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: url.home,
    element: <HomePage />,
  },
  {
    path: url.about,
    element: <div>About</div>,
  },
]);

const RoutesProvier = () => {
  return <RouterProvider router={router} />;
};

export default RoutesProvier;
