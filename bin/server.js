"use strict"

const app = require("../src/app");
const debug = require("debug")("introducaonodejs:server");
const http = require("http");

const port = normalizePort(process.env.PORT || "1234");
app.set("port", port);

const server = http.createServer(app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

console.log(`Servidor Node.js rodando na porta ${port}`);

function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

function onError(error) {
    if (error.syscall != "listen") {
        throw error;
    }

    const bind = typeof port === "string"
        ? `Pipe ${port}`
        : `Port ${port}`;

    switch (error.code) {
        case "EACCES":
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const address = server.address();
    const bind = typeof address === "string"
        ? `Pipe ${address}`
        : `Port ${address.port}`;
    debug(`Listening on ${bind}`);
}