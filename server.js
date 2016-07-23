'use strict';

const express = require('express');
const os = require("os");

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send(`
  	<h1>Hello world</h1>
  	<p>I am running inside a Docker container <b>${os.hostname()}</b></p>.
  	`);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);