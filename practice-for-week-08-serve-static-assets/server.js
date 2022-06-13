const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here
  if (req.method === 'GET' && req.url.split('/')[1] === 'static') {
    let fileExtension = req.url.split('.')[1];
    let folders = req.url.split('/');
    let fileName = folders[folders.length - 1];

    if (fileExtension === 'jpg') {
      const file = fs.readFileSync('./assets/images/' + fileName, 'utf-8');

      res.statusCode = 200;
      res.setHeader('Content-Type', 'image/jpeg');
      res.end(file);

    } else if (fileExtension === 'css') {
      const file = fs.readFileSync('./assets/css/' + fileName, 'utf-8');

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css');
      res.end(file);
    };
  } else {

    const homePage = fs.readFileSync('./index.html', 'utf-8');

    res.statusCode = 200;
    res.setHeader('Content-Type', 'html/text');
    res.end(homePage);
  };
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
