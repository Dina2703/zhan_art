import { useState, useEffect } from "react";
import divider from "../img/pattern-divider-desktop.svg";
import diceIcon from "../img/icon-dice.svg";

function AdviceCard() {
  const [advice, setAdvice] = useState({});
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState();

  // console.log(advice);
  // useEffect(() => {
  //   fetch("https://api.adviceslip.com/advice")
  //     .then((res) => res.json())
  //     .then((data) => setAdvice(data.slip))
  //     .catch((error) => setError(error));
  // }, [clicked]);

  return (
    <div className="w-60 h-52 md:w-72 md:h-56 text-center  rounded-lg  bg-gray-500 p-5 flex flex-col justify-around relative shadow-md shadow-slate-700">
      <h3 className="text-cyan-400  text-base tracking-[2px] capitalize font-semibold">
        Advice of the Day
      </h3>
      <div className="h-full flex items-center justify-center">
        <div>
          <p className="text-[#e2e8f0]  md:text-base text-[16px] pb-4 tracking-wide font-light ">
            {/* {error ? "loading..." : advice.advice} */} test
          </p>
        </div>
      </div>

      <div className="w-full  mb-8 ">
        <img src={divider} alt="" />
      </div>
      <div className="absolute -bottom-5 right-1/2 translate-x-5">
        <button
          onClick={() => setClicked((prev) => !prev)}
          className="rounded-full bg-cyan-400 p-3  cursor-pointer  hover:scale-105 transition ease-in-out"
        >
          <img src={diceIcon} alt="button-icon" className="w-4" />
        </button>
      </div>
    </div>
  );
}

export default AdviceCard;
