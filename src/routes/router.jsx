import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AddBlog from "../pages/AddBlog";
import NotFound from "../pages/NotFound";
import Guest from "../layouts/Guest";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Guest />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "addBlog", element: <AddBlog /> },
    ],
  },

  { path: "*", element: <NotFound /> },
]);

export default router;
