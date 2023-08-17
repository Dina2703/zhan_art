// import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import Switcher from "./Switcher";

function Navbar() {
  return (
    <nav className="flex  justify-between md:items-start items-center py-4  gap-5">
      <h1
        className="text-3xl font-bold flex-1  uppercase tracking-wide  
      "
      >
        Zhan KHVAN
      </h1>

      <ul className="flex gap-5 lowercase items-start   font-mono cursor-pointer  font-semibold text-sm ">
        <li className="  hover:underline">about</li>
        <li className="  hover:underline">blog</li>
      </ul>
      <div>
        <Switcher />
      </div>
    </nav>
  );
}

export default Navbar;
