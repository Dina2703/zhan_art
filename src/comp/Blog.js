import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { AdminContext } from "../App";

function Blog({ eachBlog, id }) {
  console.log(eachBlog);
  const { category, image, body, title, feelings, createdAt } = eachBlog;

  const isAdmin = useContext(AdminContext);
  const deletePost = async (id) => {
    await deleteDoc(doc(db, "posts", id));
  };

  return (
    <div
      className="flex h-auto flex-col  items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-700 relative
      "
    >
      {isAdmin && (
        <FaTrash
          className="absolute z-10 top-2 right-2 cursor-pointer text-red-500 "
          onClick={() => deletePost(id)}
        />
      )}

      <img
        src={image}
        alt=""
        className=" object-cover  w-full h-52 rounded-t-lg   object-center"
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
