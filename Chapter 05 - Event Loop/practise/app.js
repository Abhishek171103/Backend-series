const fs = require('fs');
console.log("1. Start of script");

// Synchronous (blocking) operation
console.log("2. Reading file synchronous");
const dataSync = fs.readFileSync('user-details.txt', 'utf8');
console.log("3. Synchronous read complete");

// Asynchronous (non-blocking) operation
console.log("4. Reading file asynchronous");
fs.readFile('user-details.txt', 'utf8', (err, dataAsync) => {
    if (err) {
        throw err;
    }
    console.log("5. Asynchronous read complete");
});

console.log("6. End of script");


// Output :
// 1. Start of script
// 2. Reading file synchronous
// 3. Synchronous read complete
// 4. Reading file asynchronous
// 6. End of script
// 5. Asynchronous read complete