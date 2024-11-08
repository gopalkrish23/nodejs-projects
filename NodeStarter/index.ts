import express, { Application, Request, Response } from "express"
import "dotenv/config"
import authRoutes from "./routes/auth"
import blogRoutes from "./routes/blog"

const app: Application = express();
app.use(express.json())
app.use(express.urlencoded())

const PORT =  process.env.SERVER_PORT || 5000;

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("<h1>hi<h1>");
})

app.use("/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
}).on("error", (err: any) => {
    if(err.code === "EADDRINUSE") {
        console.log("the port already in use")
    }
    else 
        console.log("server unable to start ",err)
});