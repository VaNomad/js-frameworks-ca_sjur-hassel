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
                to="/Home"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Home"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Home"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Home"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Right Box */}
        <div>
          <div>
            <Cart />
          </div>
          {/* Logo */}
          <div>
            <Link>
              <h1>Vespera</h1>
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}