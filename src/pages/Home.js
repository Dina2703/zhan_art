import { useContext, useState, useEffect } from "react";
import UploadImg from "../comp/Upload";
import { AdminContext } from "../App";
import ImageGrid from "../comp/ImageGrid";
import Modal from "../comp/Modal";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

function Home() {
  const isAdmin = useContext(AdminContext);
  const [selectedImg, setSelectedImg] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  // console.log(selectedImg);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div className="text-center   font-mono md:py-6  text-slate-600 dark:text-white ">
      <div
        className="relative mb-10 shadow-clay bg-white p-12 rounded-3xl
      "
      >
        <motion.div
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          className=" bg-bg-mobile md:bg-bg-desk w-full md:h-[500px] h-[460px] bg-cover rounded-lg bg-top bg-no-repeat   brightness-110 "
        ></motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="absolute 2xl:top-36  md:top-28  bottom-16 left-10 lg:left-[50%] md:left-[40%] w-48  md:w-60  md:text-[#c084fc]  dark:text-slate-600 text-white font-normal text-left md:text-xl"
        >
          Welcome to my digital sketchbook. <br /> I'm Zhan and I'm here to take
          you on a visual adventure through my drawings.
        </motion.span>
      </div>
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        {isVisible && (
          <div className="flex items-center justify-center my-5 ">
            <FaArrowDown className="text-xl animate-bounce text-white " />
          </div>
        )}

        <h1
          className="md:text-2xl  font-normal  mb-10 lg:my-16  text-white md:font-semibold
      "
        >
          {isAdmin ? "Upload New Project" : " Explore My Gallery 🥴"}
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
