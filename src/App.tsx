import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./containers/Layout";
import Home from "./containers/Home";
import Categories from "./containers/Category";
import { Suspense } from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      handle: {
        crumb: () => (
          <Link to="/" relative="path">
            Anasayfa
          </Link>
        ),
      },
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: ":categoryName",
          element: <Categories />,
          handle: {
            crumb: () => {
              return (
                <Link to="." relative="path">
                  Ürün Kategorisi
                </Link>
              );
            },
          },
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<>..loading</>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
