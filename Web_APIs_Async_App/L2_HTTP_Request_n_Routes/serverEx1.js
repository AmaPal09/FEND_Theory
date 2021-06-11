// serverEx1.js
const express = require('express');
const app = express();

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

const data = [];
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

