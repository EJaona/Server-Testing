const express = require("express");
const db = require("./db");

const server = express();

server.use(express.json());

module.exports = server;
