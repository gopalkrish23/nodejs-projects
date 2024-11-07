const crypto = require("crypto")
process.env.UV_THREADPOOL_SIZE = 8;

const startTime = Date.now();

// crypto.pbkdf2Sync("a", "b", 100000, 512, "sha512")
// console.log("1:", Date.now() - startTime)

for(let i=0; i<100; i++)
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (err, result) => {
        console.log(`${i+1}:`, Date.now() - startTime)
    })