// Imports —————————————————————————————————
// Css
import "./App.css";
// Components
// import Layout from "./components/Layout";
// import NavBar from "./components/header/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CheckOut from "./pages/CheckOut";
import Details from "./pages/Details";
import Four04 from "./pages/Four04";
// Router
// import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

// React-Router —————————————————————————————————
// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/checkout",
//         element: <CheckOut />,
//       },
//       {
//         path: "/details/:id",
//         element: <Details />,
//       },
//       {
//         path: "*",
//         element: <Four04 />,
//       },
//     ],
//   },
// ]);

// App Component —————————————————————————————————

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Four04 />} />
      </Routes>
    </>
    // <div>
    //   <RouterProvider router={router} />
    // </div>
  );
}

export default App;
