// Creating local server

// Create a server file like createLocalServer.js

// Require the files needed for creating the server
const express = require('express');

// Create the app with express
const app = express();

// Set Dependencies
const bodyParser = require('body-parser');
/*Middleware*/
// Require the express app to use the middleware we have selected
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json);
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialise main project folder
app.use(express.static('L1_Node_n_Express_Env'));


// It should include basic information like:
// 	port- The port on which the server will run?
// 	listen method- it tell us what port it is listening at and the other parameter for it is a callback function.
//port
const port = 8000;

//server start
const server = app.listen(port, listening);

// Callback function can contain the required action to be done when server is called.

function listening() {
	console.log("server running");
	console.log(`It is running on local host ${port}`);
}