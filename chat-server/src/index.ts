import express, { Application, Request, Response } from "express"
import "dotenv/config"
import messageRoutes from "./routes/messages"
import { Server } from "socket.io"

const app: Application = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req: Request, res: Response) => {
    res.sendFile(__dirname + '/' + "index.html")
});

app.use("/message", messageRoutes)

const server = app.listen(process.env.SERVER_PORT, () => {
    console.log("server started listening:", process.env.SERVER_PORT)
}).on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
        console.log("Error: address already in use")
    }
    else
        console.log("server boot error:", err)
})

const io = new Server(server)

io.on("connection", (socket) => {
    console.log("NEWCONN:", socket.id)
    socket.on("disconnect", () => {
        console.log("DISCONN:", socket.id)
    })
    socket.on("new message", (msg) => {
        console.log("NEWMESS:", socket.id)
        io.emit("incoming msg", msg);
    })
})