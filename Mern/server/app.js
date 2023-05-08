require("dotenv").config();
const express = require("express")
const app = express();
const cors = require("cors")
require("./db/conn")
const PORT = 5000;

app.get("/", (req, res) => {
    res.status(201).json("Hello world")
})
app.listen(PORT, () => {
    console.log("Connected to the server");
})