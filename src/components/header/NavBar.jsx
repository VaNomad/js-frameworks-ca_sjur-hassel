import { Link, NavLink, Outlet } from "react-router-dom"
import Cart from "./Cart"

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-between p-3 h-[130px]">
        {/* Left Box */}
        <div className="h-full">
          <ul className="flex flex-col xs:flex-row xs:gap-8 h-full justify-between">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/checkout"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Checkout
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Right Box */}
        <div className="flex flex-col xs:flex-row-reverse xs:gap-4 h-full justify-between">
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