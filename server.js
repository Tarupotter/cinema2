import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (req, res) =>{
    const buf = await fs.readFile('./dist/index.html');
    const html = buf.toString();
    res.send(html);
});

app.get('/index.html', async (req, res) =>{
    const buf = await fs.readFile('./dist/index.html');
    const html = buf.toString();
    res.send(html);
});

app.get('/about.html', async (req, res) =>{
    const buf = await fs.readFile('./dist/about.html');
    const html = buf.toString();
    res.send(html);
});

app.get('/contact.html', async (req, res) =>{
    const buf = await fs.readFile('./dist/contact.html');
    const html = buf.toString();
    res.send(html);
});

app.get('/cafe.html', async (req, res) =>{
    const buf = await fs.readFile('./dist/cafe.html');
    const html = buf.toString();
    res.send(html);
});

app.use('/Group-d-assignment', express.static('./dist/assets')); 
app.use('/assets', express.static('./dist/assets'));
app.use('/images', express.static('./dist/images'));
app.use('/database', express.static('./dist/database'));

app.listen(3080);