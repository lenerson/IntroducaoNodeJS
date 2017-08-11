"use strict"

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = router.get("/", (request, response, next) => {
    response.status(200).send({
        title: "Introduction to Node.js Heroes",
        version: "1.0.0"
    });
});

const create = router.post("/", (request, response, next) => {
    response.status(201).send(request.body);
});

const update = router.put("/:id", (request, response, next) => {
    const id = request.params.id;
    response.status(200).send({ id: id, item: request.body });
});

const exclude = router.delete("/:id", (request, response, next) => {
    const id = request.params.id;
    response.status(200).send({ message: `Hero with id: ${id} was deleted` });
});

app.use("/", route);
app.use("/heroes", create);
app.use("/heroes", update);
app.use("/heroes", exclude);

module.exports = app;