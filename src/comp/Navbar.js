import React from "react";

function Navbar() {
  return (
    <div className="flex py-4">
      <h1
        className="text-3xl font-semibold flex-1  uppercase
      "
      >
        Zhan K
      </h1>
      <ul className="flex gap-5 lowercase">
        <li>Work</li>
        <li>About</li>
        <li>Blog</li>
      </ul>
    </div>
  );
}

export default Navbar;
