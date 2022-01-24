const express = require("express");
const res = require("express/lib/response");
const apiRouter = require("./routes/api.router.js");
const app = express();

app.use(express.json());

app.use("/api",apiRouter)

app.use("/",(req, res) => {
    res.send({msg:"Welcome Back"})
})

app.all("/*", (req, res) => {
    res.status(404).send({msg:"Not Found"})
})

module.exports = app;