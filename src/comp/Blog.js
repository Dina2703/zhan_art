import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function Blog({ eachBlog, id }) {
  console.log(eachBlog);
  const { category, image, body, title, feelings, createdAt } = eachBlog;

  return (
    <div
      className="flex h-[400px] flex-col  items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-700
      "
    >
      <img
        src={image}
        alt=""
        className=" object-cover w-full rounded-t-lg md:h-[200px]   h-[200px] object-center"
      />

      <div className="flex flex-col justify-between p-3  leading-normal  ">
        {" "}
        <div className="md:text-2xl text-xl font-bold tracking-tight text-gray-600 dark:text-white ">
          {title}
        </div>
        <p className="text-[14px] line-clamp-2 mb-3 font-normal text-gray-700 dark:text-gray-400 ">
          {body}
        </p>
        <span className="text-gray-500 text-[12px] text-end w-full ">
          {new Date(createdAt?.seconds * 1000).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
        <Link to={`/blogs/${id}`} className="flex items-center">
          <button className="inline-flex w-32 items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-white hover:text-gray-600 border-2 border-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-white transition-all ease-in-out ">
            read more <BsArrowRight className="ml-3" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Blog;
