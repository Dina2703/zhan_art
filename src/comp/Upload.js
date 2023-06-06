import { useState } from "react";

const UploadImg = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  //list of allowed types of files
  const types = ["image/png", "image/jpeg"];

  function handleChange(e) {
    // console.log("changed");
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please, select an image file (png or jpeg)");
    }
  }

  return (
    <div>
      <form action="">
        <label htmlFor="fileUpload">
          <input
            type="file"
            id="fileUpload"
            onChange={handleChange}
            className="hidden"
          />
          <div className="rounded-full border shadow-md p-2 w-14 h-14 mx-auto my-10 flex items-center justify-center cursor-pointer">
            <span className="font-semibold text-2xl">+</span>
          </div>
        </label>
      </form>
      <div>{error && <div>{error}</div>}</div>
      <div>{file && <div>{file.name}</div>}</div>
    </div>
  );
};

export default UploadImg;
