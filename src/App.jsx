// Imports —————————————————————————————————
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import ValidCheckOut from "./pages/ValidCheckOut";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/checkoutsuccess" element={<ValidCheckOut />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
