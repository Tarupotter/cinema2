import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (req, res) =>{
    const buf = await fs.readFile('../dist/index.html');
    const html = buf.toString();
    res.send(html);
});


app.use('/Group-d-assignment', express.static('../dist/assets')); 
app.use('/assets', express.static('../dist/assets'));
app.use('/images', express.static('../dist/images'));
app.use('/data', express.static('../dist/dataBase'));

app.listen(3080);