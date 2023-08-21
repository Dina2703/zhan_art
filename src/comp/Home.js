import { useContext, useState } from "react";
import UploadImg from "./Upload";
import { AdminContext } from "../App";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";

function Home() {
  const isAdmin = useContext(AdminContext);
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="text-center font-mono py-6 text-slate-600 h-auto dark:text-white">
      <h1
        className="text-xl font-semibold mb-4
      "
      >
        Welcome to my gallery 🥴
      </h1>
      <p className=" my-7">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        error.
      </p>
      <div>{isAdmin && <UploadImg />}</div>
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default Home;
