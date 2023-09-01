import React, { useEffect } from "react";
import useStorage from "../hooks/useStorageHook";
import { motion } from "framer-motion";

function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);
  // console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
      className="h-1 my-5 bg-cyan-400"
    ></motion.div>
  );
}

export default ProgressBar;
