/*Basic application created using express*/

//Create server app using express
const express = require('express');
const app = express();
//middleware for parsing
app.use(express.json());

const courses = [
	{id: 1, name:'course1'},
	{id: 2, name:'course2'},
	{id: 3, name:'course3'}
];
// basic url
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
	res.send(courses);
});

// Post request.
// Use postman extension on chrome to test
app.post('/api/courses', (req, res) => {
	const course = {
		id: courses.length+1,
	// Assumption that Req body contains param name. For getting the name from the body, middleware would be needed to parse the JSON req from the client
		name: req.body.name
	};

	courses.push(course);
	// return the new course to client
	res.send(course);
});


app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) res.status(404).send('Course not found');
	res.send(course);

});

//On production app does not run on
// 3000 port. Port will be dynamically assigned. Get these details from the environment setup.
// Use global object called process which has property called env which contains all env values
//Use that PORT if it is set or use port 3000
const port = process.env.PORT || 3000;

/*
Possible to set env var on MAC using export
export PORT=5000 and
on MAC set PORT=5000
*/

//Run locally on port 3000
app.listen(port, () => console.log(`Running on port ${port}`));