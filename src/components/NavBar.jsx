import { Link, NavLink } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";

export default function NavBar() {
  const cart = useContext(ShoppingCartContext);

  // Move this variable into shoppingCartContext.jsx
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
      <nav className="fixed top-0 z-20 flex h-[80px] w-full items-center justify-between bg-white px-5 py-2 shadow-md shadow-gray-100 xs:h-[50px] font-karla">
        {/* Left Box */}
        <div className="h-full xs:w-6/12 lg:w-3/5">
          <ul className="h-full flex flex-col justify-around text-sm xs:flex-row xs:items-center lg:justify-around">
            <li className="min-w-[80px]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active" : "notactive"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="min-w-[80px]">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active" : "notactive"
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="min-w-[80px]">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "active" : "notactive"
                }
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Right Box */}
        <div className="flex h-full flex-col xs:justify-around xs:w-1/2 xs:flex-row-reverse">
          <div className="relative flex justify-end">
            <Link to="/checkout">
              <BsBag size={25} />
              <div className={productsCount ? "glowing" : "notglowing"}></div>
              <div className="absolute bottom-[-15px] right-[-12px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-lime-400 border border-lime-500 xs:bottom-[-5px]"></div>
              <div className="overlay-number">{productsCount}</div>
            </Link>
          </div>
          {/* Logo */}
          <div className="">
            <Link to={"/"}>
              <h1 className="me-10 xs:me-0 bg-gradient-to-b from-violet-800 to-fuchsia-600 bg-clip-text pb-2 font-exa text-xl font-black uppercase tracking-wider text-transparent">
                Vespera
              </h1>
              <h2 className="relative right-[-28px] top-[-13px] flex items-center justify-center text-xs tracking-wider">
                e-commerce
              </h2>
            </Link>
          </div>
        </div>
      </nav>
      {/* <Outlet /> */}
    </>
  );
}
