const http = require("http");
const express = require('express');
const mysqlPool = require('mysql2');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());

// ################# Rotas #################
app.get("/teste", (req, res, next) => {
    res.json(req.query);
});

var server = http.createServer(app);
server.listen(3000, () => {
    //server started
});