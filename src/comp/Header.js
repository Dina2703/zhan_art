// import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import Switcher from "./Switcher";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="relative">
      <nav className="flex  flex-col md:flex-row md:justify-between md:items-end items-center py-4  gap-5 md:gap-10 mt-2 md:mt-0">
        <NavLink
          to="/"
          className="md:text-3xl text-4xl font-[400] flex-1  uppercase tracking-wide   w-full
      "
        >
          Zhan KHVAN
        </NavLink>

        <ul className="flex gap-5 lowercase items-end    font-light cursor-pointer   text-sm  ">
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { display: "none" } : { display: "inline-block" }
            }
          >
            <li className="  hover:dark:text-gray-400">home</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "border-b-2 dark:border-gray-400 border-gray-500" : ""
            }
          >
            <li className="  hover:dark:text-gray-400">about</li>
          </NavLink>

          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "border-b-2 dark:border-gray-400 border-gray-500" : ""
            }
          >
            <li className="  hover:dark:text-gray-400">blog</li>
          </NavLink>
        </ul>

        <div className="hidden md:block">
          <Switcher iconSize={30} />
        </div>
      </nav>

      <div className="block absolute top-5 right-5 md:hidden ">
        <Switcher iconSize={23} />
      </div>
    </div>
  );
}

export default Header;
