// Imports —————————————————————————————————
// Css
import "./App.css";
// Components
import NavBar from "./components/header/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CheckOut from "./pages/CheckOut";
import Product from "./pages/Product";
// Router
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// React-Router —————————————————————————————————
const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

// App Component —————————————————————————————————

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
