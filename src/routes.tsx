import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import { url } from "./config/url";

const router = createBrowserRouter([
  {
    path: url.home,
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to='about'>About Us</Link>
      </div>
    ),
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
