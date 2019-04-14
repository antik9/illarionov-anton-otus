/* Imports */
const request = require('request');
const conf = require('./conf.json');

/* Constants */
const args = process.argv.slice(2);
const numberOfQueries = Number.parseInt(args[0]);
const requestType = args[1];

/* Functions */
async function getResponse() {
    return await new Promise(resolve => {
        request(`http://${conf.host}:${conf.port}`, (error, response, body) => {
            resolve(body);
        });
    });
}

/* Main */
if (requestType === 'parallel' && numberOfQueries > 0) {
    console.log(`Start ${numberOfQueries} parallel queries.....\n`);
    [...Array(numberOfQueries)].forEach(async _ => {
        console.log(await getResponse());
    });
} else if (requestType === 'sequential' && numberOfQueries > 0) {
    console.log(`Start ${numberOfQueries} sequential queries.....\n`);
    (
        async _ => {
            for (const i of Array(numberOfQueries)) {
                console.log(await getResponse());
            };
        }
    )();
} else {
    console.error('Should run as:\nnode request.js <number> {parallel,sequential}');
}
