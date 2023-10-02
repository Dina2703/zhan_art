import React from "react";
import { motion } from "framer-motion";

function Modal({ selectedImg, setSelectedImg }) {
  const handleCloseModel = (e) => {
    if (e.target.tagName.toLowerCase() === "div") {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0  left-0 w-full h-full bg-[rgba(0,0,0,0.7)] z-50"
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
        className="block h-screen w-auto p-10   "
      >
        <img
          // initial={{ y: "-100vh" }}
          // animate={{ y: 0 }}
          // transition={{
          //   ease: "easeIn",
          //   duration: 0.3,
          // }}

          src={selectedImg.url}
          alt="art name"
          className=" object-cover  h-[90%] m-auto"
        />
        <p className="h-20 p-3   text-white">{selectedImg.id}</p>
      </motion.div>
    </motion.div>
  );
}

export default Modal;
