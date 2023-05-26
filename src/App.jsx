// Imports —————————————————————————————————
// Css
import "./App.css";
// Components
import NavBar from "./components/header/NavBar";
// import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import CheckOut from "./pages/CheckOut";
import Details from "./pages/Details";

import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/Cart";
// Router
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext";
// import HomePage from "./api/HomePage";

// React-Router —————————————————————————————————
const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/checkout",
        element: <Cart />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
]);

// App Component —————————————————————————————————

function App() {
  return (
    <div>
      <ShopContextProvider>
        <RouterProvider router={router} />
      </ShopContextProvider>
    </div>
  );
}

export default App;
