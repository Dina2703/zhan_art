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
      className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-50"
      onClick={handleCloseModel}
    >
      <motion.img
        // initial={{ y: "-100vh" }}
        // animate={{ y: 0 }}
        // transition={{
        //   ease: "easeIn",
        //   duration: 0.3,
        // }}
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 50,
        }}
        src={selectedImg}
        alt="art name"
        className="block max-w-[60%] max-h-[80%] my-16 mx-auto border-white border-[3px] shadow-[3px_5px_7px_rgba(0,0,0,0.5)]"
      />
    </motion.div>
  );
}

export default Modal;
