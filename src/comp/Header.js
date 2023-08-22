// import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import Switcher from "./Switcher";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="flex  justify-between md:items-end items-center py-4  gap-5 md:gap-10 ">
      <NavLink
        to="/"
        className="text-3xl font-bold flex-1  uppercase tracking-wide  
      "
      >
        Zhan KHVAN
      </NavLink>

      <ul className="flex gap-5 lowercase items-start   font-mono cursor-pointer  font-semibold text-sm ">
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
          style={({ isActive }) =>
            isActive
              ? {
                  borderBottom: "2px solid #fff",
                }
              : { borderBottom: "none" }
          }
        >
          <li className="  hover:dark:text-gray-400">about</li>
        </NavLink>
        <NavLink
          to="/blogs"
          style={({ isActive }) =>
            isActive
              ? {
                  borderBottom: "2px solid #fff",
                }
              : { borderBottom: "none" }
          }
        >
          <li className="  hover:dark:text-gray-400">blog</li>
        </NavLink>
      </ul>
      <div>
        <Switcher />
      </div>
    </nav>
  );
}

export default Header;
