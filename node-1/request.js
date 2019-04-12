/* Imports */
const request = require('request');
const conf = require('./conf.js');

/* Constants */
const args = process.argv.slice(2);
const number_of_queries = Number.parseInt(args[0]);
const request_type = args[1];

/* Functions */
async function get_response() {
    return await new Promise(resolve => {
        request(`http://${conf.host}:${conf.port}`, (error, response, body) => {
            resolve(body);
        });
    });
}

/* Main */
if (request_type == 'parallel' && number_of_queries > 0) {
    console.log(`Start ${number_of_queries} parallel queries.....\n`);
    [...Array(number_of_queries)].forEach(async _ => {
        console.log(await get_response());
    });
} else if (request_type == 'sequential' && number_of_queries > 0) {
    console.log(`Start ${number_of_queries} sequential queries.....\n`);
    (
        async _ => {
            for (const i of Array(number_of_queries)) {
                console.log(await get_response());
            };
        }
    )();
} else {
    console.error('Should run as:\nnode request.js <number> {parallel,sequential}');
}