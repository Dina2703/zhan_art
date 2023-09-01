import { useContext, useState } from "react";
import UploadImg from "../comp/Upload";
import { AdminContext } from "../App";
import ImageGrid from "../comp/ImageGrid";
import Modal from "../comp/Modal";
import { motion } from "framer-motion";

function Home() {
  const isAdmin = useContext(AdminContext);
  console.log(isAdmin);
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="text-center   font-mono py-6  text-slate-600 dark:text-white">
      <div
        className="relative mb-10 
      "
      >
        <motion.div
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          className=" bg-bg-mobile md:bg-bg-desk w-full h-[550px] bg-cover  bg-center bg-no-repeat   brightness-50 "
        ></motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="absolute 2xl:top-36  md:top-28 top-32 left-10  md:left-[58%] w-52  md:w-40 font-bold text-white text-xl md:text-base text-left"
        >
          Welcome to my digital sketchbook. I'm Zhan and I'm here to take you on
          a visual adventure through my drawings.
        </motion.span>
      </div>
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        {" "}
        <h1
          className="md:text-xl lg:text-3xl font-semibold  mb-10 lg:my-20 
      "
        >
          Explore My Gallery 🥴
        </h1>
        <div>{isAdmin && <UploadImg />}</div>
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </motion.div>
    </div>
  );
}

export default Home;
