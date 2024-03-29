import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { AdminContext } from "../App";
import { getStorage, ref, deleteObject } from "firebase/storage";

import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function ImageGrid({ setSelectedImg }) {
  const isAdmin = useContext(AdminContext);
  const { docs } = useFirestore("images");

  //delete Art image from the firebase storage
  const storage = getStorage();

  // console.log(docs);

  // const photos2 = docs.map((doc) => {
  //   return {
  //     src: doc.url,
  //     width: +Math.floor(Math.random() * 6) + 3,
  //     height: +Math.floor(Math.random() * 4) + 2,
  //   };
  // });
  // console.log(photos2);
  // console.log(Math.floor(Math.random() * 7));

  //delete image
  const deleteImg = async (id, fileName) => {
    // console.log(id);
    await deleteDoc(doc(db, "images", id));

    const itemRef = ref(storage, `drawings/${fileName}`);
    deleteObject(itemRef)
      .then(() => {
        console.log("successfully deleted from firebase storage");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="columns-1 md:columns-2 lg:columns-3 2xl:columns-4
    "
    >
      {docs &&
        docs.map((doc) => (
          <motion.div
            whileHover={{ cursor: "pointer" }}
            layout
            key={doc.id}
            className="overflow-hidden  bg-white mb-4  relative  p-5 shadow-clay dark:shadow-customBoxShadow rounded-2xl "
            onClick={() => setSelectedImg(doc)}
          >
            {isAdmin && (
              <FaTrash
                className="absolute z-10 top-2 right-2 cursor-pointer text-red-500 "
                onClick={() => deleteImg(doc.id, doc.fileName)}
              />
            )}{" "}
            <span
              className="
            right-8 bottom-7 absolute text-[10px] lowercase text-slate-100"
            >
              {doc.type}
            </span>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              src={doc.url}
              alt="Zhan artwork"
              className="w-full h-auto hover:scale-105 transition-all ease-in-out rounded-2xl"
              loading="lazy"
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
