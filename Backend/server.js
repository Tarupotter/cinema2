import initApp from "./app.js";
import { allMovies, oneMovie } from "./movies.js";

const api = {
  allMovies,
  oneMovie,
};

const app = initApp(api);

app.listen(5080, () => {
  console.log("running on port 5080");
});
