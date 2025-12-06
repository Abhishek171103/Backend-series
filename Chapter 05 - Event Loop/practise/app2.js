console.log("1. Start of script");

// Microtask queue (Promises)
Promise.resolve().then(() => {
    console.log("2. Microtask 1");
});

// Timer Queue 
setTimeout(() => {
    console.log("3. Timer 1");    
}, 0);

// I/O queue
const fs = require('fs');
fs.readFile('./user.txt', () => console.log("4. I/O Operation"));

// Check queue
setImmediate(() => console.log("5. Immediate 1"));

// Close queue
process.on('exit',(code) => console.log("6. Exit Event"));

console.log("7. End of script");
