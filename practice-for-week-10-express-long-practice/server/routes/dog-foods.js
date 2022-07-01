// ------------------------------  SERVER DATA ------------------------------  

let nextFoodId = 1;
function getNewFoodId() {
  const newFoodId = nextFoodId;
  nextFoodId++;
  return newFoodId;
}

const foods = [
  {
    foodId: getNewFoodId(),
    name: "Kibble",
    dogId: 1
  },
  {
    foodId: getNewFoodId(),
    name: "Bone",
    dogId: 1
  },
  {
    foodId: getNewFoodId(),
    name: "Biscuit",
    dogId: 2
  }
];

// ------------------------------  MIDDLEWARES ------------------------------ 

const validateFoodInfo = (req, res, next) => {
  if (!req.body || !req.body.name) {
    const err = new Error("Food must have a name");
    err.statusCode = 400;
    next(err);
  }
  next();
};

// ------------------------------  ROUTE HANDLERS ------------------------------  

// GET /dogs/:dogId/foods
const getFoodsByDogId = (req, res) => {
  const { dogId } = req.params;
  res.json(foods.filter(food => food.dogId == dogId));
};

// POST /dogs/:dogId/foods
const createFood = (req, res) => {
  const { name } = req.body;
  const { dogId } = req.params;
  const newFood = {
    foodId: getNewFoodId(),
    name,
    dogId
  };
  foods.push(newFood);
  res.json(newFood);
};

// ------------------------------  ROUTER ------------------------------  

// Your code here

  // import express framework
const express = require('express');

  // create router and use built-in json parser for express
const foodsRouter = express.Router({ mergeParams: true });
foodsRouter.use(express.json());

  // set up router to get dog food
foodsRouter.get('/dogs/:dogId/foods', getFoodsByDogId);

  // middleware to validate if the request body includes a name property
foodsRouter.use('/dogs/:dogId/foods', validateFoodInfo);
  // set up router to post a new dog food
foodsRouter.post('/dogs/:dogId/foods', createFood);

module.exports = foodsRouter;
