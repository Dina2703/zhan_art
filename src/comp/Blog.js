import React from "react";
import { Link } from "react-router-dom";

function Blog({ eachBlog, id }) {
  console.log(eachBlog);
  const { category, image, body, title, feelings, createdAt } = eachBlog;

  return (
    <Link to={`/blogs/${id}`}>
      <div>
        <div className="relative overflow-hidden max-w-[330px] z-10">
          <img
            src={image}
            alt=""
            className=" object-cover w-full  mb-1 rounded-sm hover:scale-105 transition-all ease-in-out"
          />
        </div>

        <div className="flex gap-2 items-center  ">
          <span className="font-bold text-[14px]">{category}</span> -
          <span className="text-gray-500 text-[12px]">
            {new Date(createdAt?.seconds * 1000).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
        <div className="text-[14px] font-semibold pb-1 leading-[18px] ">
          {title}
        </div>
        <p className="text-[12px] font-light line-clamp-3 ">{body}</p>
      </div>
    </Link>
  );
}

export default Blog;
