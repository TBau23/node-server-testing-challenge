const express = require('express');
const hobbitRouter = require("../router/hobbitRouter")

const server = express();

server.use(express.json());
server.use("/api/hobbits", hobbitRouter)


server.get("/", (req, res) => {
    res.status(200).json({api: "is cooking. Standing by to provide information as needed."})
})


module.exports = server;
