import React from "react";
import AdviceCard from "../comp/AdviceCard";
import Blog from "../comp/Blog";
import { Link } from "react-router-dom";
// import JokeCard from "../comp/JokeCard";
import { motion } from "framer-motion";

function Blogs({ isAdmin }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="flex flex-col gap-10 h-fit"
    >
      <div className="flex flex-col md:flex-row-reverse justify-center gap-7 items-center mt-10">
        <AdviceCard />
        {/* <JokeCard /> */}
        <div className="md:w-2/5 w-full text-center md:text-left text-xs md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsam
          nobis libero ad eveniet suscipit expedita earum illo porro doloremque
          ab, quaerat est sed qui aliquam totam quidem deserunt exercitationem?
        </div>
      </div>
      {isAdmin && (
        <span className="font-semibold  text-center rounded-full py-5 bg-gray-500 cursor-pointer text-white flex items-center justify-center text-lg">
          <Link to={"/blogs/admin"}>add new blog</Link>
        </span>
      )}
      <div className="grid items-center justify-center gap-x-2 gap-y-4  md:grid-cols-2 lg:grid-cols-3">
        <Blog />
        <Blog />
        <Blog />
      </div>
    </motion.div>
  );
}

export default Blogs;
