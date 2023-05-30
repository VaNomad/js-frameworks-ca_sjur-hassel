import { Link, NavLink, Outlet } from "react-router-dom";
import { BsBag } from "react-icons/bs";

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center md:justify-around p-5 h-[130px] md:h-full shadow-lg shadow-fuchsia-200">
        {/* Left Box */}
        <div className="h-full md:w-1/4 md:justify-center lg:justify-center">
          <ul className="flex flex-col md:flex-row md:gap-8 h-full justify-between">
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
        <div className="flex flex-col md:flex-row-reverse md:w-1/3 h-full justify-between">
          <div className="flex justify-end relative">
            <Link to="/checkout">
              <BsBag size={25} />
              <div className="absolute w-[20px] h-[20px] rounded-full bg-red-700 text-white flex justify-center items-center right-[-5px] bottom-[-5px] animate-pulse">
                3
              </div>
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
