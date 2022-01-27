import express from "express";
import apiRouter from "./routes/api.router.js";

const app = express();

app.use(express.json());

app.use("/api",apiRouter)

app.all("/*", (req, res) => {
    res.status(404).send({msg:"Please Login First"})
})

export default app;