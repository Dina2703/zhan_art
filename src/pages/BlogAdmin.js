import { useState } from "react";

function BlogAdmin() {
  const [post, setPost] = useState({
    title: "",
    feelings: "",
    category: "",
    body: "",
    banner: "",
  });
  // const [file, setBannerImage] = useState("");
  // const [error, setError] = useState("");

  const { title, feelings, category, body, banner } = post;

  const handleChange = (e) => {
    if (e.target.files) {
      setPost((prev) => ({
        ...prev,
        banner: e.target.files[0],
      }));
    }
    setPost((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //list of allowed types of files
  // const types = ["image/png", "image/jpeg"];

  // function handleBannerUpload(e) {
  //   // console.log("changed");
  //   const selected = e.target.files[0];
  //   if (selected && types.includes(selected.type)) {
  //     setBannerImage(selected);
  //     setError(null);
  //   } else {
  //     setBannerImage(null);
  //     setError("Please, select an image file (png or jpeg)");
  //   }
  // }

  const addPostToFirebase = (e) => {
    e.preventDefault();
    console.log(post);
    console.log(banner);
  };
  return (
    <div className="relative flex flex-col  justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-green-600/40  lg:max-w-xl">
        <h1 className="text-lg font-semibold text-center  underline uppercase text-slate-600">
          Create a new post
        </h1>
        <form
          onSubmit={addPostToFirebase}
          className="flex flex-col mt-6 gap-6 text-slate-600 "
        >
          <div className="flex items-center justify-center flex-col gap-4 ">
            {banner ? (
              <div>{banner && <div>{banner.name}</div>}</div>
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
              className="flex-1 border-gray-400 border-b-2 outline-none px-2 py-1 text-sm"
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
              className="flex-1 border-gray-400 border-b-2 outline-none px-2 py-1 text-sm"
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
              className=" border-gray-400 border-b-2 outline-none px-2 py-1 text-sm flex-1 "
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
