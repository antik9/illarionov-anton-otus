/* Imports */
const stream = require('stream');
const args = process.argv.slice(2);

/* Arguments & Variables */
let limit = -1;

if ( args.length == 1 ) { 
    limit = +args[0];
    if ( ! ( limit > 0 ) ) {
        console.error('Usage: node pipe.js <positive number>');
        process.exit(1);
    }
}

let counter = 0;

/* Functions */
const random = () => {
    return (Math.random() - .5) * 2000;
}

/* Streams */
const randomStream = new stream.Readable({
    objectMode: false,
    highWaterMark: 1024,
    read(size) {
        this.push(random().toString()); 
    },
});

const addStream = new stream.Transform({
    objectMode: false,
    highWaterMark: 1024,
    transform( number, encoding, callback ) {
        this.push((+number + random()).toString());
        callback();
    },
});

const writeStream = new stream.Writable({
    objectMode: false,
    highWaterMark: 1024,
    write(number, encoding, callback) {
        console.log(number.toString());
        if ( limit < 0 || ++counter < limit ) {
            callback();
        }
    },
});

/* Main */
randomStream.pipe(addStream).pipe(writeStream);