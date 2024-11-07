const https = require("https");
const crypto = require("crypto")
const fs = require("fs")

const startTime = Date.now();

// for(let i=0; i<10; i++)
function doRequest() {
    https.request("https://www.google.com/", (res) => {
        res.on("data", (data) => {});
        res.on("end", () => console.log( Date.now() - startTime ))
    }).end();
}

function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (err, result) => {
        console.log(`Hash: `, Date.now() - startTime)
    })
}

doRequest();
fs.readFile('./package.json', () => console.log("FS: ", Date.now() - startTime))
doHash();
doHash();
doHash();
doHash();