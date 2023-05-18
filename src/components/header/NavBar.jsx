import { Link, NavLink, Outlet } from "react-router-dom"
import Cart from "./Cart"

export default function NavBar() {
  return (
    <>
      <nav>
        {/* Left Box */}
        <div>
          <ul>
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
        <div>
          <div>
            <Link to="/checkout">
              <Cart />
            </Link>
          </div>
          {/* Logo */}
          <div>
            <Link to={"/"}>
              <h1>Vespera</h1>
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}