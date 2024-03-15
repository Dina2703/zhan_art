// import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import Switcher from "./Switcher";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="relative">
      <nav className="flex  flex-col md:flex-row justify-between  md:items-end items-center py-8   md:gap-10 mt-2 md:mt-6">
        <NavLink
          to="/"
          className="md:text-5xl  text-4xl  capitalize tracking-wide     font-bold md:pl-10  drop-shadow-md 
      "
        >
          Zhan Khvan
        </NavLink>

        <ul className="flex gap-5 lowercase items-end    cursor-pointer   text-lg  font-semibold  drop-shadow-md mt-5 md:mt-0">
          <li className="  hover:dark:text-gray-400">
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? { display: "none" } : { display: "inline-block" }
              }
            >
              home
            </NavLink>
          </li>
          <li className="  hover:dark:text-gray-400">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "border-b-2 dark:border-gray-400 border-white" : ""
              }
            >
              about
            </NavLink>
          </li>
          <li className="  hover:dark:text-gray-400">
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "border-b-2 dark:border-gray-400 border-white" : ""
              }
            >
              blog
            </NavLink>
          </li>
        </ul>

        <div className="hidden md:block absolute top-3 right-5">
          <Switcher iconSize={23} />
        </div>
      </nav>

      <div className="block absolute top-3  right-5 md:hidden ">
        <Switcher iconSize={23} />
      </div>
    </div>
  );
}

export default Header;
