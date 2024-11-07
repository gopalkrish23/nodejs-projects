// const cluster = require("cluster")

// if(cluster.isMaster) {
//     cluster.fork()
//     cluster.fork()
//     cluster.fork()
//     cluster.fork()
//     cluster.fork()
//     cluster.fork()
//     cluster.fork()
//     cluster.fork()
//     cluster.fork()
//     cluster.fork()
//     cluster.fork()
//     cluster.fork()
//     cluster.fork()
//     cluster.fork()
//     cluster.fork()
//     cluster.fork()
// } else {
    const express = require("express")
    const app = express()

    app.get("/", (req, res) => {
        console.log("Hi am express")
        res.send("hi")
    })

    app.listen(3000)
// }