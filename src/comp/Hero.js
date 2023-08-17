import { useState } from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import Footer from "./Footer";

function Hero() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="h-full  bg-gray-100 dark:bg-gray-600 text-slate-600 dark:text-white">
      <div className="max-w-4xl mx-auto    px-5 md:px-10 2xl:px-0  relative ">
        <Navbar />
        <Main />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default Hero;
