import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import About from "./pages/About";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Join from "./pages/Join";
import Trainers from "./pages/Trainer";
import Trainer from "./pages/Trainer";
import Admin from "./pages/Admin";
import Detail from "./pages/Trainer/Detail";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "about",
              element: <About />,
            },
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "join",
              element: <Join />,
            },
            {
              path: "trainer",
              element: <Trainer />,
              //   children: [
              //     {
              //       path: ":detail",
              //       element: <Detail />,
              //     },
              //   ],
            },
            {
              path: "admin",
              element: <Admin />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <h1>404</h1>,
    },
  ],
  {
    basename: "",
  }
);

export default router;
