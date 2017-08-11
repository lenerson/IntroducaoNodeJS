"use strict"

const express = require("express");

const app = express();
const router = express.Router();

const route = router.get("/", (request, response, next) => {
    response.status(200).send({
        title: "Introdução ao Node.js",
        version: "1.0.0"
    });
});
app.use("/", route);

module.exports = app;