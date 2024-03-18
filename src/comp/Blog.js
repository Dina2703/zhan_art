import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { AdminContext } from "../App";

function Blog({ eachBlog, id, setReset }) {
  // console.log(eachBlog);
  const { category, image, body, title, feelings, createdAt } = eachBlog;

  const isAdmin = useContext(AdminContext);
  const deletePost = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    setReset((prev) => !prev);
  };

  return (
    <div
      className="flex  flex-col border   shadow dark:border-gray-700 dark:bg-gray-700 relative p-6 shadow-clay dark:shadow-customBoxShadow bg-white rounded-xl
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
        className="object-cover  w-full h-44 rounded-t-lg   object-center"
      />

      <div className="flex flex-col justify-between p-3  leading-normal  ">
        {" "}
        <div className=" text-sm font-[600] leading-[20px] text-gray-600 dark:text-white line-clamp-2 h-8">
          {title}
        </div>
        <p className="text-[15px] line-clamp-2 mb-2 font-normal overflow-hidden text-gray-700 dark:text-gray-400 h-10">
          {body}
        </p>
        <span className="text-white text-[12px] text-end w-full ">
          {new Date(createdAt?.seconds * 1000).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
        <Link to={`/blogs/${id}`} className="flex items-end cursor-default">
          <button className="inline-flex w-32 items-center justify-between px-3 py-2 text-sm font-medium text-center text-white bg-[#c084fc] rounded-lg shadow-claySmallBtn dark:shadow-customBoxShadow hover:bg-white hover:text-[#c084fc]  hover:w-full border-2 border-[#c084fc] dark:border-gray-600  dark:bg-gray-600  transition-all ease-in-out cursor-pointer ">
            read more <BsArrowRight className="ml-3" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Blog;
