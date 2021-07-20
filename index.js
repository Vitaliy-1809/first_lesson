const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.APP_PORT;
const app = express();
// app.use(express.json());

app.use(express.json());

app.get('/home/:id', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send('Hello, node.js!');
});

app.listen(port, () => {
    console.log(`App start listen on ${port}`);
});