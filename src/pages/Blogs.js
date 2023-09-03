import React, { useEffect, useState } from "react";
import AdviceCard from "../comp/AdviceCard";
import Blog from "../comp/Blog";
import { Link } from "react-router-dom";
// import JokeCard from "../comp/JokeCard";
import { motion } from "framer-motion";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";

function Blogs({ isAdmin }) {
  const [blogsData, setBlogs] = useState([]);

  console.log(blogsData);
  console.log(blogsData);
  useEffect(() => {
    const getPostsArray = async () => {
      const querySnapShot = await getDocs(collection(db, "posts"));
      // querySnapShot.docs.map((doc) => console.log(doc.data()));
      setBlogs(
        querySnapShot.docs.map((doc) => {
          return {
            id: doc.id,
            data: { ...doc.data() },
          };
        })
      );
    };
    getPostsArray();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="flex flex-col gap-10 h-fit"
    >
      <div className="flex flex-col-reverse md:flex-row-reverse md:justify-around  items-center md:mt-20 mt-10 gap-10 lg:gap-0 ">
        <AdviceCard />
        {/* <JokeCard /> */}
        <div className="md:w-2/5 w-full text-center md:text-left text-sx md:text-base ">
          Step into the world of my post page, where every scroll is a new
          adventure waiting to happen! 🌟🚀 So, stay tuned for a dose of
          intriguing stories, insightful tips, and perhaps a few surprises along
          the way. 💡🌍✨
        </div>
      </div>
      {isAdmin && (
        <span className="font-semibold  text-center rounded-full py-5 bg-gray-500 cursor-pointer text-white flex items-center justify-center text-lg">
          <Link to={"/blogs/admin"}>add new blog</Link>
        </span>
      )}
      <div className=" lg:text-2xl text-xl  font-semibold  dark:text-white text-gray-600 text-center mt-5 md:mt-10 capitalize">
        The World According to Me
      </div>
      {blogsData.length > 0 ? (
        <div className=" grid items-center justify-center md:gap-x-6  md:gap-y-10 gap-y-3 md:grid-cols-2 lg:grid-cols-3 ">
          {blogsData.map((eachBlog) => (
            <Blog eachBlog={eachBlog.data} key={eachBlog.id} id={eachBlog.id} />
          ))}
        </div>
      ) : (
        <p className="text-center">No Posts</p>
      )}
    </motion.div>
  );
}

export default Blogs;
