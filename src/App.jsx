// Imports —————————————————————————————————
// Css
import "./App.css";
// Components
import NavBar from "./components/NavBar";
// import Home from "./pages/Home";
import Contact from "./pages/contact/Contact"
// import CheckOut from "./pages/CheckOut";
import Details from "./pages/productDetails/ProductDetails";

import Shop from "./pages/shop/shop";
import { BsBag } from "react-icons/bs";
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
        element: <BsBag size={25} />,
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
