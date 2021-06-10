// Establish an Express server
const express = require("express");
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

// Path to the HTML file
const DIST_DIR = path.join(__dirname, '../build');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));
app.get("/", (req, res) => {
  res.sendFile(HTML_FILE);
});

// Connect to database
const db = require('../database/database');
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const dbRouter = require('../database/routers/router');

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use('/', dbRouter);

// Listen
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
