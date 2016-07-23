'use strict';

const express = require('express');
const os = require("os");

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send(`Hello world, I am running inside a Docker container ${os.hostname()}.\n`);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);