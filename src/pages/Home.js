import { useContext, useState } from "react";
import UploadImg from "../comp/Upload";
import { AdminContext } from "../App";
import ImageGrid from "../comp/ImageGrid";
import Modal from "../comp/Modal";

function Home() {
  const isAdmin = useContext(AdminContext);
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="text-center h-fit font-mono py-6  text-slate-600 dark:text-white">
      <div
        className="relative mb-10 
      "
      >
        <img
          src="hero_pic.jpg
    "
          alt="main section"
          className="object-contain  w-full md:h-[70vh] h-auto  brightness-50 "
        />{" "}
        <span className="absolute 2xl:top-36  md:top-28 top-14  left-[58%] w-16  md:w-24 font-bold text-slate-100 text-[16px] md:text-base text-left">
          To learn to draw is to draw and draw and draw.
        </span>
      </div>
      <h1
        className="text-xl font-semibold  mb-10 
      "
      >
        Welcome to my gallery 🥴
      </h1>
      {/* <p className=" my-7">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        error.
      </p> */}
      <div>{isAdmin && <UploadImg />}</div>
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default Home;
