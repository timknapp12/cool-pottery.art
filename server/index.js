require("dotenv").config();
const express = require("express");
// const cors = require("cors");

const path = require("path");

const port = 8040;

const app = express();
app.use(express.static(`${__dirname}/../build`));

// app.use(cors());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => console.log(`listening on port ${port}`));
