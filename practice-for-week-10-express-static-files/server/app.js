const express = require('express');
const app = express();
// Your code here

// Part 1: File paths appended to root URL
// app.use(express.static('assets'));

// Part 2: File paths appended to root URL II
// app.use('/scripts', express.static('assets/scripts'));

// Part 3: File paths appended to a resource
// app.use('/stylesheets', express.static('assets/css'));

// Bonus: File paths appended to a resource II
app.use('/stickers', express.static('assets/images'))

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
