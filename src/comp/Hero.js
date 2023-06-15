import { useState } from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import Footer from "./Footer";

function Hero() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="max-w-4xl m-auto px-5 md:px-10 2xl:px-0  min-h-full  relative">
      <Navbar />
      <Main />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Footer />
    </div>
  );
}

export default Hero;
