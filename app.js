const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! hello marask :D i think this will work review stage added'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
