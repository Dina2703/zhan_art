import React from "react";
import useFirestore from "../hooks/useFirestore";

function ImageGrid() {
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <div
      className="grid grid-cols-3 my-5 mx-auto gap-20
    "
    >
      {docs &&
        docs.map((doc) => (
          <div
            key={doc.id}
            className="overflow-hidden h-0 py-[50%] px-0 relative opacity-[.8]"
          >
            <img
              src={doc.url}
              alt="Zhan artwork"
              className="min-w-[100%] min-h-[100%] max-w-[120%] absolute top-0 left-0"
            />
          </div>
        ))}
    </div>
  );
}

export default ImageGrid;
