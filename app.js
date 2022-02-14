const express = require("express");
const apiRouter = require("./routes/api.router.js");

const app = express();
app.use(express.json());

// CORS Origin access needs changeing when site goes live
app.use((req , res , next)=>{
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/api",apiRouter)

app.all("/*", (req, res) => {
    res.status(404).send({msg:"Not Found"})
})

module.exports = app;