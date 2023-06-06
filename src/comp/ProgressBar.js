import React from "react";
import useStorage from "../hooks/useStorageHook";

function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);
  console.log(url, progress);

  return <div>ProgressBar</div>;
}

export default ProgressBar;
