import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import Home from "./pages/Home";
import MakeCourse from "./pages/MakeCourse";
import DoNow from "./pages/DoNow";

const pages = [
  { path: "/", element: <Home /> },
  { path: "/makecourse", element: <MakeCourse /> },
  { path: "/donow", element: <DoNow /> },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: pages,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
