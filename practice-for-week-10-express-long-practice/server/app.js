const express = require('express');
const app = express();

// my code

  // setup dotenv to read .env file when server starts
require('dotenv').config();

  // use router from /routes/dogs.js
const dogs = require('./routes/dogs')
app.use(dogs);

  //used router through dogs.js instead
//   // use router from /routes/dog-foods.js
// const dogFoods = require('./routes/dog-foods');
// app.use(dogFoods);

  // setup express for async errors, static assets, and json parsing
require('express-async-errors');
app.use('/static', express.static('assets'));
app.use(express.json());

// log the method, url, and status code
app.use((req, res, next) => {
  res.on('finish', () => {
    console.log(req.method, req.url);
    console.log(res.statusCode);
  });

  next();
});

// For testing purposes, GET /
app.get('/', (req, res) => {
  res.json("Express server running. No content provided at root level. Please use another route.");
});

// For testing express.json middleware
app.post('/test-json', (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.json(req.body);
  next();
});

// For testing express-async-errors
app.get('/test-error', async (req, res) => {
  throw new Error("Hello World!")
});

app.use((req, res, next) => {
  const error = new Error("The requested resourse couldn't be found.");
  error.statusCode = 404;
  throw error;
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500);
  const body = {
    message: "Something went wrong",
    statusCode: res.statusCode,
    stack: err.stack
  }

  if (process.env.NODE_ENV !== "production") {
    res.json(body)
  } else {
    delete body["stack"];
    res.json(body);
  }
});

const port = process.env.PORT;
app.listen(port, () => console.log('Server is listening on port', port));
