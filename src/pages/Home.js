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
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="relative mb-10 shadow-clay dark:shadow-customBoxShadow bg-white  md:p-12 rounded-3xl 
      "
      >
        <div className=" bg-bg-mobile md:bg-bg-desk w-full md:h-[500px] h-[460px] bg-cover rounded-lg bg-top bg-no-repeat   brightness-110 "></div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="absolute 2xl:top-36  md:top-28  top-0 right-0 left-0 lg:left-[50%] md:left-[40%] w-full  md:w-60  md:text-[#c084fc] text-sm dark:text-slate-600 text-white font-normal md:text-left md:text-xl rounded-md p-3 text-center"
        >
          Welcome to my digital sketchbook. <br /> I'm Zhan and I'm here to take
          you on a visual adventure through my drawings.
        </motion.span>
        {/* <div className="absolute bottom-14 right-10">
          <div className="ball "></div>
          <div className="shadow"></div>
        </div> */}
      </motion.div>
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
