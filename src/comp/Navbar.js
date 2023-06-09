import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="flex  justify-between md:items-start items-center py-4  gap-5">
      <h1
        className="text-3xl font-bold flex-1  uppercase tracking-wide text-slate-600
      "
      >
        Zhan KHVAN
      </h1>

      <div>
        <BsFillMoonStarsFill className="cursor-pointer text-md dark:text-white" />
      </div>

      {/* <ul className="flex gap-5 lowercase items-start   font-mono cursor-pointer  font-semibold text-sm ">
        <li className="text-slate-600 hover:underline">about</li>
        <li className="text-slate-600 hover:underline">blog</li>
      </ul> */}
    </nav>
  );
}

export default Navbar;
