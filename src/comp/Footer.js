import React from "react";
import { ImYoutube2 } from "react-icons/im";

function Footer() {
  return (
    <div className="flex flex-col h-20 border-t-2 lg:flex-row mt-10 p-3  w-full   items-center justify-between  ">
      {" "}
      <div className="flex items-center gap-2">
        <span className="text-[12px]">
          Discover my relaxing drawings crafted in moments of leisure.
        </span>
        <a
          href="https://www.youtube.com/@Kindl58"
          target="_blank"
          rel="noreferrer"
        >
          <ImYoutube2 className="text-3xl text-red-500 cursor-pointer" />
        </a>
      </div>
      <div className=" lg:text-xs text-[12px] ">
        All rights reserved &copy; by Zhan Khvan
      </div>
    </div>
  );
}

export default Footer;
