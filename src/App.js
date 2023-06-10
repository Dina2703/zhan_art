import Main from "./comp/Main";
import Navbar from "./comp/Navbar";
import ImageGrid from "./comp/ImageGrid";
import Modal from "./comp/Modal";
import { useState } from "react";
import Footer from "./comp/Footer";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="max-w-4xl m-auto px-5 md:px-10 2xl:px-0  h-screen ">
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

export default App;
