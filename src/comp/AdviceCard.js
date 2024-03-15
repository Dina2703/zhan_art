import { useState, useEffect } from "react";
import divider from "../img/pattern-divider-desktop.svg";
import { lifeLaws } from "../laws";

import { GrLinkNext } from "react-icons/gr";

function AdviceCard() {
  // const [advice, setAdvice] = useState({});
  const [clicked, setClicked] = useState(false);
  // const [error, setError] = useState();
  const [selectedItem, setSelectedItem] = useState("");

  // console.log(advice);
  useEffect(() => {
    // fetch("https://api.adviceslip.com/advice")
    //   .then((res) => res.json())
    //   .then((data) => setAdvice(data.slip))
    //   .catch((error) => setError(error));
    let randomIndex = Math.floor(Math.random() * lifeLaws.length);
    setSelectedItem(lifeLaws[randomIndex]);
  }, [clicked]);

  // console.log(lifeLaws);
  return (
    <div className="w-full h-auto md:w-72 lg:w-96 lg:h-52 md:h-40 text-center   flex flex-col gap-3 justify-center  relative shadow-md shadow-clay bg-white p-12 rounded-3xl">
      <h3 className="text-[#c084fc]   text-xs md:text-base  tracking-[2px] capitalize font-semibold">
        Advice of the Day
      </h3>
      <div className="h-full flex items-center justify-center">
        <div>
          <p className="text-[#c084fc]  md:text-base text-[20px] pb-4 tracking-wide font-light  ">
            {/* {error ? "loading..." : advice.advice} */}
            {/* <span className="font-semibold block">{selectedItem.law}</span> */}
            <span>{selectedItem.desc}</span>
          </p>
        </div>
      </div>

      <div className="absolute -bottom-5 right-1 translate-x-5">
        <button
          onClick={() => setClicked((prev) => !prev)}
          className="  p-5  cursor-pointer  hover:scale-105 transition ease-in-out shadow-clay bg-white  rounded-full"
        >
          <GrLinkNext className="w-4  font-bold " />
        </button>
      </div>
    </div>
  );
}

export default AdviceCard;
