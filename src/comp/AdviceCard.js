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
    <div className="w-full h-auto md:w-72 lg:w-96 lg:h-52 md:h-40 text-center   flex flex-col gap-3 justify-center  relative shadow-md shadow-clay dark:shadow-customBoxShadow bg-white p-12 rounded-3xl z-10 ">
      <h3 className="text-[#c084fc] underline  text-xs md:text-base md:font-bold  tracking-[2px] capitalize font-semibold dark:text-gray-600">
        Advice of the Day
      </h3>
      <div className="h-full flex items-center justify-center">
        <div>
          <p className="text-[#c084fc]  md:text-lg text-[20px] pb-4 tracking-wide font-light dark:text-gray-600  ">
            {/* {error ? "loading..." : advice.advice} */}
            {/* <span className="font-semibold block">{selectedItem.law}</span> */}
            <span>{selectedItem.desc}</span>
          </p>
        </div>
      </div>

      <div className="absolute md:-bottom-8 md:-right-2 -bottom-8 right-12 translate-x-5">
        <button
          onClick={() => setClicked((prev) => !prev)}
          className="  p-5 md:p-7  cursor-pointer  hover:scale-95 transition ease-in-out shadow-clay dark:shadow-customBoxShadow  bg-white  rounded-full"
        >
          <GrLinkNext className="w-4  font-extrabold " />
        </button>
      </div>
    </div>
  );
}

export default AdviceCard;
