const express = require("express");
const db = require("mongodb");
const app = express();


app.listen(3000, () => {
    console.log("Server up and running on port 3000");
});
