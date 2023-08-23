import React from "react";
import AdviceCard from "../comp/AdviceCard";
import JokeCard from "../comp/JokeCard";

function Blogs() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center gap-7 items-center">
        <AdviceCard />
        <JokeCard />
      </div>
    </div>
  );
}

export default Blogs;
