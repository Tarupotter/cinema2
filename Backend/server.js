import express from 'express';
import fs from 'fs/promises';
import { engine } from 'express-handlebars';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

async function renderPage(res, page) {
    console.log(`Rendering page: ${page}`); /* kom ihåg att ändra sökvägen i json */
    res.render(page);
}

app.get('/', (req, res) =>{
   renderPage(res, 'index');
});

app.get('/index', (req, res) =>{
    renderPage(res, 'index');
});

app.get('/about', (req, res) =>{
    renderPage(res, 'about');
});

app.get('/contact', (req, res) =>{
    renderPage(res, 'contact');
});

app.get('/cafe', (req, res) =>{
    renderPage(res, 'cafe');
});

app.use('/Group-d-assignment', express.static('../dist/assets')); 
app.use('/assets', express.static('../dist/assets'));
app.use('/images', express.static('../dist/images'));
app.use('/database', express.static('../dist/database'));

app.listen(5080, () => {
console.log('App is running on port 5080');

}); 