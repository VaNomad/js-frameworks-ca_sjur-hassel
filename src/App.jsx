// Imports —————————————————————————————————
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Four04 from "./pages/Four04";
import { Routes, Route } from "react-router-dom";
import CheckOut from "./pages/CheckOut";
import CheckOutSuccess from "./pages/CheckOutSuccess";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/checkoutsuccess" element={<CheckOutSuccess />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
