import React, { useEffect } from "react";
import useStorage from "../hooks/useStorageHook";

function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);
  // console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div
      style={{ width: progress + "%" }}
      className="h-1 mt-5 bg-red-400"
    ></div>
  );
}

export default ProgressBar;
