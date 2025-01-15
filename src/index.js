import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (req, res) =>{
    const buf = await fs.readFile('./static/index.html');
    const html = buf.toString();
    res.send(html);
});

app.get('/', async (req, res) =>{
    const buf = await fs.readFile('./static/index.html');
    const html = buf.toString();
    const name = req.params.name;

    const changedHtml = html.replace('Retro', name);
    res.send(changedHtmltml);
});


/*app.use('', express.static(''));  Här behöver jag hjälp */

app.listen(3080);