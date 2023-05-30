// Imports —————————————————————————————————
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Four04 from "./pages/Four04";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CheckOut from "./pages/CheckOut";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import ProductList from "./api/ProductList";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<Four04 />} />
        </Routes>
      </ShoppingCartProvider>
    </>
    // <div>
    //   <RouterProvider router={router} />
    // </div>
  );
}

export default App;
