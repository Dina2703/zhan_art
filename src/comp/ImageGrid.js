import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <div
      className="grid grid-cols-3 my-5 mx-auto gap-20
    "
    >
      {docs &&
        docs.map((doc) => (
          <motion.div
            whileHover={{ opacity: 1 }}
            layout
            key={doc.id}
            className="overflow-hidden h-0 py-[50%] px-0 relative opacity-[.8]"
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={doc.url}
              alt="Zhan artwork"
              className="min-w-[100%] min-h-[100%] max-w-[100%] absolute top-0 left-0"
            />
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrid;
