import { Link, NavLink, Outlet } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";


export default function NavBar() {
  const cart = useContext(ShoppingCartContext);

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
      <nav className="sticky top-0 flex h-[130px] items-center justify-between bg-white p-5 shadow-lg shadow-fuchsia-50 md:h-full md:justify-around">
        {/* Left Box */}
        <div className="h-full md:w-1/4 md:justify-center lg:justify-center">
          <ul className="flex h-full flex-col justify-between md:flex-row md:gap-8">
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
              <div className="absolute bottom-[-15px] md:bottom-[-9px] right-[-12px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-green-600"></div>
              <div className="overlay-number">{productsCount}</div>
            </Link>
          </div>
          {/* Logo */}
          <div className="relative">
            <Link to={"/"}>
              <h1 className="bg-gradient-to-b from-violet-800 to-fuchsia-600 bg-clip-text font-exa text-2xl font-black uppercase tracking-wider text-transparent">
                Vespera
              </h1>
              <h2 className="absolute bottom-[-10px] right-0 flex items-center justify-center tracking-wider md:justify-end">
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
