import { useContext, useState } from "react";
import UploadImg from "../comp/Upload";
import { AdminContext } from "../App";
import ImageGrid from "../comp/ImageGrid";
import Modal from "../comp/Modal";
import { motion } from "framer-motion";

function Home() {
  const isAdmin = useContext(AdminContext);
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="text-center   font-mono py-6  text-slate-600 dark:text-white">
      <div
        className="relative mb-10 
      "
      >
        <motion.img
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          src="hero_pic.jpg
    "
          alt="main section"
          className="object-fill  w-full md:h-[480px]  h-auto  brightness-50 "
        />{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="absolute 2xl:top-36  md:top-28 top-14  left-[58%] w-16  md:w-24 font-bold text-slate-100 text-[16px] md:text-base text-left"
        >
          To learn to draw is to draw and draw and draw.
        </motion.span>
      </div>
      <h1
        className="text-xl font-semibold  mb-10 
      "
      >
        Welcome to my gallery 🥴
      </h1>
      <div>{isAdmin && <UploadImg />}</div>
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default Home;
