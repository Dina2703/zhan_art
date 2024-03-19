import React, { useEffect, useState } from "react";
import AdviceCard from "../comp/AdviceCard";
import Blog from "../comp/Blog";
import { Link } from "react-router-dom";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";

function Blogs({ isAdmin }) {
  const [blogsData, setBlogs] = useState([]);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const getPostsArray = async () => {
      const postRef = collection(db, "posts");

      const q = query(postRef, orderBy("createdAt", "desc"));
      // querySnapShot.docs.map((doc) => console.log(doc.data()));
      const querySnapShot = await getDocs(q);
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

  useEffect(() => {
    if (reset) {
      const getPostsArray = async () => {
        const postRef = collection(db, "posts");

        const q = query(postRef, orderBy("createdAt", "desc"));
        // querySnapShot.docs.map((doc) => console.log(doc.data()));
        const querySnapShot = await getDocs(q);
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
    }
  }, [reset]);

  return (
    <div className="flex flex-col gap-10 h-fit min-h-screen">
      <div className="flex flex-col-reverse md:flex-row-reverse md:justify-around  items-center md:mt-20  gap-10 lg:gap-0 ">
        <div className="hidden md:block">
          <AdviceCard />
        </div>

        <div className="md:w-2/5 w-full text-[18px] leading-[1.8em] mt-3 md:mt-6 text-left font-light tracking-[.02em]">
          Step into the world of my post page, where every scroll is a new
          adventure waiting to happen! 🌟🚀 So, stay tuned for a dose of
          intriguing stories, insightful tips, and perhaps a few surprises along
          the way. 💡🌍✨
        </div>
      </div>
      {isAdmin && (
        <Link to={"/blogs/admin"}>
          <span className="font-semibold  text-center rounded-full py-5 bg-gray-500 cursor-pointer text-white flex items-center justify-center text-lg">
            add new blog
          </span>
        </Link>
      )}
      <div className=" lg:text-2xl text-xl   dark:text-white  text-center mt-5 md:text-2xl  font-normal   lg:my-11  text-white md:font-semibold ">
        The World According to Me
      </div>
      {blogsData.length > 0 ? (
        <div className=" grid items-center justify-center md:gap-x-6  md:gap-y-10 gap-y-8  md:grid-cols-2 lg:grid-cols-3 ">
          {blogsData.map((eachBlog) => (
            <Blog
              eachBlog={eachBlog.data}
              key={eachBlog.id}
              id={eachBlog.id}
              setReset={setReset}
            />
          ))}
        </div>
      ) : (
        <p className="text-center ">Loading ... 🤔 </p>
      )}
    </div>
  );
}

export default Blogs;
