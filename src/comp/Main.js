import React from "react";

import UploadImg from "./Upload";
function Main({ isAdmin }) {
  return (
    <div className="text-center font-mono py-6 text-slate-600 h-auto">
      <h1
        className="text-xl font-semibold mb-4
      "
      >
        Welcome to my gallery 🥴
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        error.
      </p>
      <div>{isAdmin && <UploadImg />}</div>
    </div>
  );
}

export default Main;
