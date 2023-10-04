import { useState } from "react";
import ProgressBar from "./ProgressBar";
import { toast, ToastContainer } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { db, storage } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const UploadImg = () => {
  const [file, setFile] = useState("");
  const [artType, setArtType] = useState("");
  const [comment, setComment] = useState("");

  const [error, setError] = useState(null);

  //list of allowed types of files
  const types = ["image/png", "image/jpeg"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file && types.includes(file.type)) {
      setFile(file);
      setError(null);
    } else {
      setFile(null);
      setError("Please, select an image file (png or jpeg)");
    }
    if (artType.length <= 0 || comment.length <= 0) {
      toast("Please, fill out all the fields");
    }
    //Upload new project data to Firebase
    const fileName = `${file.name}-${uuidv4()}`;
    const storageRef = ref(storage, "url/" + fileName);
    const collectionRef = collection(db, "images");
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snap) => {
        // const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        // console.log(percentage);
        // console.log(snap);
      },
      (err) => {
        setError(err);
      },
      async () => {
        //get url of an image
        const url = await getDownloadURL(storageRef);
        await addDoc(collectionRef, {
          comment,
          type: artType,
          url,
          createdAt: serverTimestamp(),
        });
      }
    );

    //reset-form
    setFile("");
    setArtType("");
    setComment("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 justify-center items-center "
      >
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row">
          <label
            htmlFor="artType"
            className="font-bold  text-base upper dark:text-white  text-gray-600  w-32 text-left"
          >
            Type
          </label>
          <select
            className="bg-gray-200  border-gray-400 border-b-2 outline-none px-3 py-1 text-sm md:w-96  w-64"
            value={artType}
            name="artType"
            onChange={(e) => setArtType(e.target.value)}
          >
            <option defaultValue="none">select...</option>
            <option value="watercolor-painting">watercolor painting</option>
            <option value="acrylic-painting">acrylic painting</option>
            <option value="scratchboard-art">scratchboard art</option>
            <option value="colored-pencil-art">colored pencil art</option>
            <option value="my-activities">others</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row">
          {" "}
          <label
            htmlFor="desc"
            className="font-bold text-base upper dark:text-white  text-gray-600 w-32   text-left"
          >
            Comment
          </label>
          <textarea
            name="comment"
            value={comment}
            className="text-[15px]  border-2 rounded-sm outline-none p-3 italic  md:w-96 w-64 tracking-wider text-black"
            rows={5}
            onChange={(e) => setComment(e.target.value)}
            id="desc"
          />
        </div>

        <label htmlFor="fileUpload" className="inline-block">
          <input
            type="file"
            id="fileUpload"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden "
          />
          <div className="rounded-full border shadow-md p-2 w-10 h-10 mx-auto my-5 lg:my-8 flex items-center justify-center cursor-pointer hover:bg-green-700 ">
            <span className="font-semibold text-2xl ">+</span>
          </div>
        </label>
        <div>{error && <div>{error}</div>}</div>
        <div>{file && <div>{file.name}</div>}</div>
        {/* {file && <ProgressBar file={file} setFile={setFile} />} */}
        <button
          type="submit"
          className=" md:w-96 w-64  px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 lowercase font-bold mb-10"
        >
          PUBLISH
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default UploadImg;
