const postData = async ( url = ' ', data = {}) => {
	console.log(data);
	const response = await fetch(url, {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)
	});

	try {
		const newData = await response.json();
		console.log(newData);
		return newData;
	}catch(error) {
		console.log("error", error);
	}
}

postData('/addMovie', {movie: 'the Matrix', score: 5});
postData('/addMovie', {movie: 'LOTR1', score: 5});
postData('/addMovie', {movie: 'Hobbit1', score: 3});


