import { Link, NavLink, Outlet } from "react-router-dom";
import Cart from "./Cart";

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-between md:justify-around p-3 h-[130px] md:h-full">
        {/* Left Box */}
        <div className="h-full md:w-1/4 md:justify-center lg:justify-center">
          <ul className="flex flex-col md:flex-row md:gap-8 h-full justify-between">
            <li className="min-w-[70px]">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "notactive")}
              >
                Home
              </NavLink>
            </li>
            <li className="min-w-[70px]">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "notactive")}
              >
                Contact
              </NavLink>
            </li>
            <li className="min-w-[70px]">
              <NavLink
                to="/checkout"
                className={({ isActive }) => (isActive ? "active" : "notactive")}
              >
                Checkout
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Right Box */}
        <div className="flex flex-col md:flex-row-reverse md:w-1/3 h-full justify-between">
          <div className="flex justify-end">
            <Link to="/checkout">
              <Cart />
            </Link>
          </div>
          {/* Logo */}
          <div>
            <Link to={"/"}>
              <h1 className="text-2xl uppercase font-exa font-black tracking-wider bg-gradient-to-b from-violet-800 to-fuchsia-600 bg-clip-text text-transparent">
                Vespera
              </h1>
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
