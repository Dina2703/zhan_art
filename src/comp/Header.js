// import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import Switcher from "./Switcher";
import { NavLink as Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex  justify-between md:items-end items-center py-4  gap-5 md:gap-10 ">
      <Link
        to="/"
        className="text-3xl font-bold flex-1  uppercase tracking-wide  
      "
      >
        Zhan KHVAN
      </Link>

      <ul className="flex gap-5 lowercase items-start   font-mono cursor-pointer  font-semibold text-sm ">
        <Link to="/about">
          <li className="  hover:underline">about</li>
        </Link>
        <Link to="/blogs">
          <li className="  hover:underline">blog</li>
        </Link>
      </ul>
      <div>
        <Switcher />
      </div>
    </nav>
  );
}

export default Header;
