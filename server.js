const express = require("express");
const db = require("./db");

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  try {
    const test = await db("test");
    res.status(200).json({ test });
  } catch (error) {
    res.status(500).json({ message: "problem getting" });
  }
});

server.post("/", async (req, res) => {
  const data = req.body;
  try {
    const test = await db("test").insert(data);
    res.status(201).json({ data });
  } catch (error) {
    res.status(500).json({ message: "can't post", data });
  }
});

server.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const test = await db("test")
      .where({ id: id })
      .del();
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: "can't delete" });
  }
});

module.exports = server;
