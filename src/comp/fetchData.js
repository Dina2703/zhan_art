import axios from "axios";

export default async function fetchData(req, res) {
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

  axios
    .request(options)
    .then((res) => {
      res.status(200).json(res.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
