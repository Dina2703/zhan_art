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
      <div className="flex lg:flex-row flex-col   items-center text-center lg:text-left justify-center   xl:px-20 ">
        <div className="lg:px-0 lg:mr-10 mt-5 lg:mt-0">
          <img
            src="about_me.JPG"
            alt="Zhan Khvan"
            className="w-auto h-[20em] lg:h-[550px]"
          />
        </div>
        <div className="flex-1">
          <h1 className="mb-5 text-2xl font-light hidden lg:block">Hi</h1>
          <div>
            <p className="text-[16px] leading-[1.8em] mt-6 font-light tracking-[.02em] text-justify">
              I'm a Roblox aficionado, conquering virtual worlds with my friends
              and taking on epic challenges. <br />
              When I'm not in the gaming universe,I'm having a riot of
              creativity as I switch between drawing with a pencil, unleashing
              vibrant watercolors, and painting on a black canvas to create my
              masterpieces. But here's the twist – I'm not just a gamer and an
              artist; I'm also a chess prodigy. You might even call me a "Chess
              Grandmaster in the Making." I love the thrill of outsmarting my
              opponents on the board. And let's not forget my aquatic adventures
              – I'm a skilled swimmer, making waves and gliding through the
              water with finesse. <br />
              When it comes to food, I've got a taste for the finer things like
              Domino's, Chick-fil-A, ramen, and good old rice. They're my fuel
              for endless adventures. <br /> So, stick around, and you'll dive
              into my world of gaming, art, chess mastery, swimming, and
              culinary delights. Life is a grand adventure, and I'm here to make
              every moment count, both on land and in the water! <br />
              Wait! Wait! Have I told you about my little brother, the brilliant
              programmer, who brings a ladder to his computer to access the
              highest code level? 😂 <br /> Check out his website{" "}
              <a
                href="https://www.alankhvan.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline"
              >
                Alan Khvan
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
