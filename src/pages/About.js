import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="flex-1"
    >
      <div className="flex lg:flex-row flex-col  gap-10 items-center text-center lg:text-left justify-center  ">
        <div className="flex-1 px-5 lg:px-0 lg:mr-10 mt-5 lg:mt-10">
          <img src="avatar.jpg" alt="Zhan Khvan" />
        </div>
        <div className="flex-1">
          <h1 className="font-semibold mb-5 text-2xl font-serif">
            Hello Hello
          </h1>
          <div>
            <p className="text-base leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              perferendis, voluptatibus exercitationem corrupti aspernatur,
              facere, modi cupiditate ab fuga pariatur fugiat nemo commodi
              delectus officiis molestiae quis. Ullam recusandae, animi
              aspernatur, optio perferendis nobis sit, suscipit fugiat commodi
              at dolorum ex! Quis eos ab debitis assumenda mollitia. Sunt, odit
              a?
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
