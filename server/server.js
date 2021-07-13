// Establish an Express server
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// Path to the HTML file
const DIST_DIR = path.join(__dirname, "../build");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.static(DIST_DIR));
app.get("/", (req, res) => {
  res.sendFile(HTML_FILE);
});

// Connect to database
const db = require("../database/database");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// const dbRouter = require('../database/routes/router');
// app.use('/', dbRouter);
require("../database/routes/router")(app);

const port = 3000;
// Listen
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
