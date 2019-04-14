/* Imports */
const http = require('http');
const conf = require('./conf.json');

/* Functions */
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

const server = http.createServer(async (request, response) => {
    await sleep(100);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('OK');
    console.log(`[${new Date()}] ${request.method} ${request.url}`);
})

/* Main */
server.listen(conf.port, conf.host);
