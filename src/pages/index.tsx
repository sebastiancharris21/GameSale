import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorDetails from "./ErrorDetails";
import Home from "./Home";
import Games from "./games";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <Layout>
        <ErrorDetails />
      </Layout>
    ),
    children: [
      {
        //componente de Home
        index: true,
        element: <Home />,
      },
      {
        //componente de games
        path: "/games",
        element: <Games />,
      },
    ],
  },
]);

export default router;
