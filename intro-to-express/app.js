const express = require('express');

// The app variable holds a reference to an Express Application (app) object. 
// You'll call methods on the app object as you build out your web application.

const app = express();

app.get('/status', (req, res) => {
    res.send("The server is alive!")
});

const port = 3000;
app.listen(port, console.log(`Server is listening on port ${port}`));
