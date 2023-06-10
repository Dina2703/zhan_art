import { useState, useRef, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  //Closing the dropdown menu when clicked outside

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="flex items-center py-4" ref={ref}>
      <h1
        className="text-3xl font-bold flex-1  uppercase tracking-wide text-slate-600
      "
      >
        Zhan KHVAN
      </h1>
      <ul className="md:flex gap-5 lowercase items-start  hidden font-mono cursor-pointer  font-semibold text-sm ">
        <li className="text-slate-600 hover:underline">about</li>
        <li className="text-slate-600 hover:underline">blog</li>
      </ul>

      <div
        className="flex flex-col md:hidden w-6  gap-1.5 cursor-pointer relative"
        onClick={toggleMenu}
      >
        {!isMenuOpen && (
          <>
            <span className="border-b-[4px] rounded-lg border-slate-600" />
            <span className="border-b-[4px] rounded-lg border-slate-600" />
            <span className="border-b-[4px] rounded-lg border-slate-600" />
          </>
        )}
      </div>

      {/* Modal */}
      {isMenuOpen && (
        <div className="w-24 h-32 tracking-wider bg-gray-400 mt-24  text-white rounded-lg p-6 absolute z-10  left-[70%] flex">
          <ul className="w-full flex flex-col justify-center items-center gap-2 font-bold text-sm ">
            <li className="cursor-pointer hover:text-slate-600">about</li>
            <li className="cursor-pointer hover:text-slate-600">blog</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
