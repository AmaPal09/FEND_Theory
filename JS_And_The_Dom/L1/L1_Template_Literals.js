// L1 Template Literals
/********************************************************************/
// Concat operator
//--------------------------------------------------------------------
const student = {
  name: 'Richard Kalehoff',
  guardian: 'Mr. Kalehoff'
};

const teacher = {
  name: 'Mrs. Wilson',
  room: 'N231'
}

let message = student.name + ' please see ' + teacher.name + ' in ' + teacher.room + ' to pick up your report card.';
console.log(message); //Richard Kalehoff please see Mrs. Wilson in N231 to pick up your report card.


let note = teacher.name + ',\n\n' +
  'Please excuse ' + student.name + '.\n' +
  'He is recovering from the flu.\n\n' +
  'Thank you,\n' +
  student.guardian;
console.log(note);
//Returns
//Returns:
// Mrs. Wilson,


// Please excuse Richard Kalehoff.
// He is recovering from the flu.


// Thank you,
// Mr. Kalehoff


/********************************************************************/
// Template Literals
//--------------------------------------------------------------------
// Template literals are essentially string literals that include
// embedded expressions.

// Denoted with backticks (` `) instead of single quotes ( '' ) or
// double quotes ( "" ), template literals can contain placeholders
// which are represented using ${expression}. This makes it much
// easier to build strings.

let message2 = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;
console.log(message2);
// Richard Kalehoff please see Mrs. Wilson in N231 to pick up your report card.

/*
 * Instructions: Change the `greeting` string to use a template literal.
 */

const myName = 'ama';
const greeting = `Hello, my name is ${myName}`;
console.log(greeting);

// TIP: Embedded expressions inside template literals can do more
// than just reference variables. You can perform operations, call
// functions and use loops inside embedded expressions!

/*
 * Programming Quiz: Build an HTML Fragment (1-2)
 */

const cheetah = {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    lifespan: '10-12 years',
    speed: '68-75 mph',
    diet: 'carnivore',
    summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
    fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    const cardHTML = `<div class="card">
                        <h3 class="name"> ${animal.name} </h3>
                        <img src="${animal.name}.jpg" alt="${animal.name}" class="picture">
                        <div class="description">
                            <p class="fact">${animal.fact} </p>
                            <ul class="details">
                                <li><span class="bold">Scientific Name</span>: ${animal.scientificName}</li>
                                <li><span class="bold">Average Lifespan</span>: ${animal.lifespan}</li>
                                <li><span class="bold">Average Speed</span>: ${animal.speed}</li>
                                <li><span class="bold">Diet</span>:${animal.diet}</li>
                            </ul>
                            <p class="brief">${animal.summary}</p>
                        </div>
                    </div>`;
    return cardHTML;
}

console.log(createAnimalTradingCardHTML(cheetah));
//Returns
//<div class="card">
	//<h3 class="name"> Cheetah </h3>
	//<img src="Cheetah.jpg" alt="Cheetah" class="picture">
	//<div class="description">
		//<p class="fact">Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth. </p>
		//<ul class="details">
			//<li><span class="bold">Scientific Name</span>: Acinonyx jubatus</li>
			//<li><span class="bold">Average Lifespan</span>: 10-12 years</li>
			//<li><span class="bold">Average Speed</span>: 68-75 mph</li>
			//<li><span class="bold">Diet</span>:carnivore</li>
		//</ul>
		//<p class="brief">Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.</p>
	//</div>
//</div>
