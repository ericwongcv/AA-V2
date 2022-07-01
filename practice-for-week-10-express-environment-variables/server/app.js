const express = require('express');
const app = express();
// Your code here

require('dotenv').config();

app.get('/', (req, res) => {
    res.send(process.env.SECRET_MESSAGE);
});

const port = process.env.PORT;
app.listen(port, () => console.log('Server is listening on port', port));

// To install dotenv use:
// npm install -g dotenv-cli

// use dotenv to load environmental variables .env file without Express configuration 
// require('dotenv').config();
