import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { motion } from "framer-motion";

function Blog({ blogsData }) {
  const [blog, setPost] = useState({});
  const [laoding, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, "posts", params.blogsId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost(docSnap.data());
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.blogsId]);

  console.log(blog);
  if (laoding) {
    <p>Loading...😈</p>;
  }

  return (
    <div className="py-5">
      <div className="text-2xl font-semibold pb-1 leading-[18px] text-center mt-5 mb-10 capitalize">
        {blog?.title}
      </div>
      <div className="flex md:flex-row md:gap-10 flex-col ">
        <motion.img
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          src={blog.image}
          alt={blog.title}
          className="w-auto h-[360px] "
        />
        <div className="flex-1 py-6 text-center md:text-left">
          <div className="flex gap-2 items-center  ">
            {/* <span className="font-bold text-xs ">
                Category:{" "}
                <span className="ml-3 text-[14px]">{blog.category}</span>
              </span> */}
          </div>

          <motion.p
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="text-xs  font-light "
          >
            {blog.body}
          </motion.p>

          <span className="text-gray-400 text-[12px] my-10 pr-10 float-right">
            {" "}
            {new Date(blog.createdAt?.seconds * 1000).toLocaleDateString(
              "en-US",
              {
                day: "numeric",
                month: "short",
                year: "numeric",
              }
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Blog;