import React from "react";

function Modal({ selectedImg, setSelectedImg }) {
  const handleCloseModel = (e) => {
    if (e.target.tagName.toLowerCase() === "div") {
      setSelectedImg(null);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"
      onClick={handleCloseModel}
    >
      <img
        src={selectedImg}
        alt="art name"
        className="block max-w-[60%] max-h-[80%] my-16 mx-auto border-white border-[3px] shadow-[3px_5px_7px_rgba(0,0,0,0.5)]"
      />
    </div>
  );
}

export default Modal;
