const http = require('http');

const server = http.createServer((req, res) => {
    // res.statusCode = 500;
    res.setHeader("Content-Type", "text/css");

    res.write('Hello');
    res.write(' ');
    res.write('World');
    res.write('!');
    // res.status = 200;
    res.end();
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
