import React from "react";
import { motion } from "framer-motion";

function Modal({ selectedImg, setSelectedImg }) {
  const handleCloseModel = (e) => {
    if (
      e.target.tagName.toLowerCase() === "div" ||
      e.target.tagName.toLowerCase() === "button"
    ) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0  left-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-50"
      onClick={handleCloseModel}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 50,
        }}
        className="flex flex-col lg:flex-row max-w-5xl lg:p-20 m-auto justify-center items-center h-full text-slate-200 "
      >
        <div className=" md:w-[60%]   ">
          <button
            className="float-right pr-4 cursor-pointer block md:hidden"
            onClick={handleCloseModel}
          >
            X
          </button>{" "}
          <img
            // initial={{ y: "-100vh" }}
            // animate={{ y: 0 }}
            // transition={{
            //   ease: "easeIn",
            //   duration: 0.3,
            // }}

            src={selectedImg.url}
            alt="art name"
            className="p-1 "
          />
          <p className=" text-xs font-serif lowercase ">{selectedImg.type}</p>{" "}
        </div>

        <div className=" w-full md:w-[500px]  lg:w-[600px]   px-3">
          <p className="text-[12px] md:text-[18px] leading-[1.6em] mt-3 font-light tracking-[.02em]  text-justify">
            {selectedImg.comment ? selectedImg.comment : ""}
          </p>
          <span className="float-right text-[12px]">
            {" "}
            {new Date(selectedImg.createdAt?.seconds * 1000).toLocaleDateString(
              "en-US",
              {
                day: "numeric",
                month: "short",
                year: "numeric",
              }
            )}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Modal;
