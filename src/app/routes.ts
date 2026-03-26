import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { Curation } from "./pages/Curation";
import { Demo } from "./pages/Demo";
import { MyPage } from "./pages/MyPage";
import { Admin } from "./pages/Admin";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "gallery", Component: Gallery },
      { path: "curation", Component: Curation },
      { path: "demo", Component: Demo },
      { path: "my", Component: MyPage },
      { path: "admin", Component: Admin },
    ],
  },
]);
