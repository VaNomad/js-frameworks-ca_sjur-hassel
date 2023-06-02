import { Link, NavLink, Outlet } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";


export default function NavBar() {
  const cart = useContext(ShoppingCartContext);

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
      <nav className="fixed top-0 z-10 flex h-[130px] w-full items-center justify-between bg-white px-7 py-5 shadow-lg shadow-fuchsia-50 md:h-[70px]">
        {/* Left Box */}
        <div className="h-full md:w-6/12 lg:w-3/5 md:justify-center">
          <ul className="flex h-full flex-col justify-between lg:justify-around md:flex-row md:items-center">
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
                to="/checkout"
                className={({ isActive }) =>
                  isActive ? "active" : "notactive"
                }
              >
                Checkout
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Right Box */}
        <div className="flex h-full flex-col justify-between md:w-1/3 md:flex-row-reverse">
          <div className="relative flex justify-end">
            <Link to="/checkout">
              <BsBag size={25} />
              <div className={productsCount ? "glowing" : "notglowing"}></div>
              <div className="absolute bottom-[-15px] right-[-12px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-green-600 md:bottom-[-9px]"></div>
              <div className="overlay-number">{productsCount}</div>
            </Link>
          </div>
          {/* Logo */}
          <div className="relative">
            <Link to={"/"}>
              <h1 className="bg-gradient-to-b from-violet-800 to-fuchsia-600 bg-clip-text pb-2 font-exa text-base xxs:text-2xl font-black uppercase tracking-wider text-transparent">
                Vespera
              </h1>
              <h2 className="text-sm flex absolute right-0 top-4 xxs:top-5 items-center justify-center tracking-wider md:justify-end">
                e-commerce
              </h2>
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
