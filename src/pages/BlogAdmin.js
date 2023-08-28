import { useState } from "react";
import { db, storage } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

function BlogAdmin() {
  const [post, setPost] = useState({
    title: "",
    feelings: "",
    category: "",
    body: "",
    image: "",
  });

  const [err, setErr] = useState(null);

  const { title, feelings, category, body, image } = post;

  const onSubmit = async (e) => {
    e.preventDefault();

    const fileName = `${image.name}-${uuidv4()}`;
    const storageRef = ref(storage, "image/" + fileName);
    const collectionRef = collection(db, "posts");
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",

      (snap) => {
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        // console.log(percentage);
        // console.log(snap);
      },
      (err) => {
        setErr(err);
      },
      async () => {
        //get url of an image
        const url = await getDownloadURL(storageRef);
        await addDoc(collectionRef, {
          title,
          feelings,
          category,
          body,
          image: url,
          createdAt: serverTimestamp(),
        });
      }
    );

    // console.log(post);
    // const docRef = await addDoc(collection(db, "posts"), { ...post });
    // console.log(docRef);

    setPost({
      title: "",
      feelings: "",
      category: "",
      body: "",
      image: "",
    });
  };

  const handleChange = (e) => {
    if (e.target.files) {
      setPost((prev) => ({
        ...prev,
        image: e.target.files[0],
      }));
    }
    setPost((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="relative flex flex-col  justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-green-600/40  lg:max-w-xl">
        <h1 className="text-lg font-semibold text-center  underline uppercase text-slate-600">
          Create a new post
        </h1>
        <form
          onSubmit={onSubmit}
          className="flex flex-col mt-6 gap-6 text-slate-600 "
        >
          <div className="flex items-center justify-center flex-col gap-4 ">
            {image ? (
              <div>{image && <div>{image.name}</div>}</div>
            ) : (
              <label className="block text-sm font-semibold lowercase ">
                Add An Image
                <input
                  type="file"
                  id="fileUpload"
                  // onChange={handleChange}
                  className="hidden "
                  onChange={handleChange}
                />
                <div className="rounded-full border shadow-md p-2 w-10 h-10 mx-auto   flex items-center justify-center cursor-pointer hover:bg-green-700 my-3">
                  <span className="font-semibold text-2xl ">+</span>
                </div>
              </label>
            )}
          </div>
          <div className="  flex items-end  flex-col lg:flex-row gap-3 ">
            <label
              htmlFor="title"
              className="w-3/12 font-bold text-base upper text-slate-500"
            >
              Post title
            </label>
            <input
              name="title"
              value={title}
              type="text"
              id="title"
              className="flex-1 bg-gray-100  border-gray-400 border-b-2 outline-none px-2 py-1 text-sm"
              // onChange={handleChange}
              placeholder="type..."
              onChange={handleChange}
            />
          </div>
          <div className="flex items-end  flex-col lg:flex-row gap-3">
            {" "}
            <label
              htmlFor="emotion"
              className="w-3/12 font-bold text-base upper text-slate-500"
            >
              What I feel like
            </label>
            <input
              name="feelings"
              value={feelings}
              onChange={handleChange}
              type="text"
              id="emotion"
              className="flex-1 bg-gray-100  border-gray-400 border-b-2 outline-none px-2 py-1 text-sm"
              placeholder="type..."
              // onChange={handleChange}
            />
          </div>
          <div className="flex items-end  flex-col lg:flex-row gap-3">
            {" "}
            <label
              htmlFor="category"
              className="font-bold w-3/12  text-base upper text-slate-500"
            >
              Category
            </label>
            <select
              className="bg-gray-100  border-gray-400 border-b-2 outline-none px-2 py-1 text-sm flex-1 "
              value={category}
              name="category"
              onChange={handleChange}
            >
              <option defaultValue="none">select...</option>
              <option value="travel">travel</option>
              <option value="friends">friends</option>
              <option value="family-story">family-story</option>
              <option value="brothers">brothers</option>
              <option value="my-activities">my-activites</option>
              <option value="interests">interests</option>
              <option value="achievement">achievement</option>
              <option value="fun-fact">fun-fact</option>
              <option value="thouths">thouths</option>
              <option value="others">others</option>
            </select>
          </div>{" "}
          <label
            htmlFor="desc"
            className="font-bold w-3/12  text-base upper text-slate-500"
          >
            Post text
          </label>
          <textarea
            name="body"
            value={body}
            className="text-[15px] border-2 rounded-sm outline-none p-3 italic tracking-wider"
            rows={25}
            onChange={handleChange}
            id="desc"
            // onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 lowercase font-bold t"
          >
            PUBLISH
          </button>
        </form>
      </div>
    </div>
  );
}

export default BlogAdmin;
