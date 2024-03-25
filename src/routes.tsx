import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { url } from "./config/url";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: url.home,
    element: <HomePage />,
  },
  {
    path: url.about,
    element: <AboutPage />,
  },
]);

const RoutesProvier = () => {
  return <RouterProvider router={router} />;
};

export default RoutesProvier;
