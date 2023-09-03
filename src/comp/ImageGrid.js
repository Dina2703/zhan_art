import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { AdminContext } from "../App";
// import Gallery from "react-photo-gallery";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function ImageGrid({ setSelectedImg }) {
  const isAdmin = useContext(AdminContext);
  const { docs } = useFirestore("images");
  // console.log(docs);

  const photos2 = docs.map((doc) => {
    return {
      src: doc.url,
      width: +Math.floor(Math.random() * 6) + 3,
      height: +Math.floor(Math.random() * 4) + 2,
    };
  });
  console.log(photos2);
  console.log(Math.floor(Math.random() * 7));

  //delete image
  const deleteImg = async (id) => {
    await deleteDoc(doc(db, "images", id));
  };

  return (
    <div
      className="columns-1 md:columns-2 lg:columns-3 2xl:columns-4
    "
    >
      {docs &&
        docs.map((doc) => (
          <motion.div
            whileHover={{ opacity: 1, cursor: "pointer" }}
            layout
            key={doc.id}
            className="overflow-hidden shadow-customBoxShadow bg-gray-200  mb-4 rounded-md   relative opacity-[1]   "
            onClick={() => setSelectedImg(doc.url)}
          >
            {isAdmin && (
              <FaTrash
                className="absolute z-10 top-2 right-2 cursor-pointer text-red-500 "
                onClick={() => deleteImg(doc.id)}
              />
            )}
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              src={doc.url}
              alt="Zhan artwork"
              className="w-full h-auto hover:scale-105 transition-all ease-in-out "
            />
          </motion.div>
        ))}
    </div>
    // {/* <div>
    //   <Gallery photos={photos2} />
    // </div> */}
  );
}

export default ImageGrid;
