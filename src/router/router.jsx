import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import About from "../pages/About";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import Layout from "../Layout";
import DynamicPricing from "../components/DynamicPricing";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/pricing",
        Component: Pricing,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "pricing/:id",
        Component: DynamicPricing
      }
    ],
  },

  
]);

export default router;
