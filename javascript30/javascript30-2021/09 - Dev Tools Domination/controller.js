const dogs = [
	{ name: 'Snickers', age: 2 },
	{ name: 'Hugo', age: 8 },
];

const p = document.querySelector('p');
p.addEventListener('click',makeGreen);

function makeGreen() {
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello %s', 'Wes');

// Styled
console.log('%c I am some great text', 'font-size: 30px; background: grey;');

// warning!
console.warn('OH NO');

// Error :|
console.error('ERROR');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
console.assert(1 === 2, 'You did not select the correct element');

const par = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is false');

// clearing
console.clear();

// Viewing DOM Elements
console.log(par);
console.dir(par);

// Grouping together
dogs.forEach(dog => {
    //? heading for the group of console.logs
    // console.group(`${dog.name} data`);
    console.groupCollapsed(`${dog.name} data`);

    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    //? must be the smae as above console.group
    console.groupEnd(`${dog.name}`);
});
console.log();

// counting
//? tracks the count for home many times something was console.logged
console.count('In the for loop');
console.count('In the for loop');
console.count('In the for loop');
console.count('change value');
console.count('In the for loop');
console.count('In the for loop');
console.count('In the for loop');
console.count('change value');
console.count('In the for loop');
console.count('In the for loop');
console.count('In the for loop');
console.count('change value');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/PastranaDigital')
	.then((data) => data.json())
	.then((data) => {
		console.timeEnd('fetching data'); //? same as above
		console.log(data);
	})
    .catch(err => console.error(err))
    .finally(() => console.log('done'));

// table
console.table(dogs);