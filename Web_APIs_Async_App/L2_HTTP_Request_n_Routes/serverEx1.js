// serverEx1.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const { response } = require('express');

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Cors for cross origin allowance
app.use(cors());
//Port for the app to run on
const port = process.env.PORT || 3000;


//Connect all files for the website with the server
app.use(express.static('website'));

/*GET REQUESTS*/
// Simple get request
app.get('/', (req, res) => {
	console.log("Hello there!");
	res.send("index.html");
});

const appData = {};
// Get request that returns data
app.get('/all', (req, res) => {
	console.log("/all req received");
	res.send(appData);
})


/*POST REQUESTS*/
app.post('/', (req, res) => {
	res.send("POST received");
});

let data = [];
app.post('/addMovie', addMovie );

function addMovie(req, res) {
	console.log("/addMovie post request");
	console.log(data);
	data.push(req.body);
}

//Keep the server running and listen for any activity.
app.listen(port, () => {
	console.log("Server Running");
});

