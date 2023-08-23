import React from "react";

function BlogAdmin() {
  return (
    <div>
      BlogAdmin
      <form className="flex flex-col">
        <label htmlFor="fileUpload" className="">
          Add Image
        </label>
        <input
          type="file"
          id="fileUpload"
          // onChange={handleChange}
          className="hidden "
        />
        <div className="rounded-full border shadow-md p-2 w-10 h-10 mx-auto my-5 lg:my-8 flex items-center justify-center cursor-pointer hover:bg-cyan-500">
          <span className="font-semibold text-2xl ">+</span>
        </div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          // onChange={handleChange}
        />
        <label htmlFor="emotion">What I feel like</label>
        <input
          type="text"
          id="emotion"
          // onChange={handleChange}
        />
        <label htmlFor="category">Title</label>
        <select>
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

        <label htmlFor="desc">Blog text</label>
        <textarea
          className="text-[15px]"
          rows={30}
          id="desc"
          // onChange={handleChange}
        />
        <button>publish</button>
      </form>
    </div>
  );
}

export default BlogAdmin;
