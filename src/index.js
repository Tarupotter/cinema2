import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (req, res) =>{
    const buf = await fs.readFile('../index.html');
    const html = buf.toString();
    res.send(html);
});


app.use('/Group-d-assignment', express.static('./dist/assets'));  

app.listen(3080);