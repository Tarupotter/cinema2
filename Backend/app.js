import express from 'express';
import fs from 'fs/promises';  /* Behöver jag denna längre?!? */
import { engine } from 'express-handlebars';
import { allMovies, oneMovie } from './movies.js';

function initApp(api) {

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './Backend/views');


async function renderPage(res, page, theTitle) {
    console.log(`Rendering page: ${page}`); 

    res.render(page, {title: theTitle});
}

app.get('/', (req, res) =>{
   renderPage(res, 'index', 'Retro');
});

app.get('/index', (req, res) =>{
    renderPage(res, 'index', 'Retro');
});

app.get('/movies', async (req, res) =>{
    const movies = await api.allMovies();
    res.render("movies", { movies })
}); 

app.get("/movies/:movieId", async (req, res) => {
    const movie = await api.oneMovie(req.params.movieId);
    res.render("movie", { movie });
  });
  
app.get('/cafe', (req, res) =>{
    renderPage(res, 'cafe', 'Servering');
});

app.get('/about', (req, res) =>{
    renderPage(res, 'about', 'Om oss');
});

app.get('/contact', (req, res) =>{
    renderPage(res, 'contact', 'Kontakta oss');
});


app.use('/assets', express.static('./dist/assets'));
app.use('/images', express.static('./dist/images'));
app.use('/database', express.static('./dist/database'));

return app;

}

export default initApp;