import { useEffect, useState } from "react";
import divider from "../img/pattern-divider-desktop.svg";
import diceIcon from "../img/icon-dice.svg";
import axios from "axios";

function JokeCard() {
  const [joke, setJoke] = useState({});
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState();

  const options = {
    method: "GET",
    url: "https://humor-jokes-and-memes.p.rapidapi.com/jokes/random",
    params: {
      "max-length": "200",
      "include-tags": "one_liner",
      "min-rating": "7",
      "exclude-tags": "nsfw",
      keywords: "rocket",
    },
    headers: {
      "X-RapidAPI-Key": "e1bc87c509msh0ec0da472f32515p113508jsnc957ac31fa99",
      "X-RapidAPI-Host": "humor-jokes-and-memes.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((res) => setJoke(res.data))
      .catch(function (error) {
        setError(error);
      });
  }, [clicked]);

  return (
    <div className="w-60 h-52 md:w-72 md:h-56 text-center  rounded-lg  bg-gray-500 p-5 flex flex-col justify-around relative shadow-lg shadow-slate-700">
      <h3 className="text-cyan-400  text-base tracking-[2px] capitalize font-semibold">
        Joke of the day
      </h3>
      <div className="h-full flex items-center justify-center">
        <div>
          <p className="text-[#e2e8f0]  md:text-base text-[16px] pb-4 tracking-wide font-light ">
            {error ? "loading..." : joke.joke}
          </p>
        </div>
      </div>

      <div className="w-full  mb-8 ">
        <img src={divider} alt="" />
      </div>
      <div className="absolute -bottom-5 right-1/2 translate-x-5">
        <button
          onClick={() => setClicked((prev) => !prev)}
          className="rounded-full bg-cyan-500 p-3  cursor-pointer  hover:scale-105 transition ease-in-out"
        >
          <img src={diceIcon} alt="button-icon" className="w-4" />
        </button>
      </div>
    </div>
  );
}

export default JokeCard;
