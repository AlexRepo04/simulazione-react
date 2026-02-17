import { createBrowserRouter, RouteObject } from "react-router";
import Home from "./pages/Home/Home.tsx";
import Store from "./pages/Store/Store.tsx";
import IPhone from "./pages/iPhone/IPhone.tsx";
import Mac from "./pages/Mac/Mac.tsx";
import Support from "./pages/Support/Support.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/iphone",
    element: <IPhone />,
  },
  {
    path: "/mac",
    element: <Mac />,
  },
  {
    path: "/support",
    element: <Support />,
  },
];

// Crea il router
export const router = createBrowserRouter(routes);
