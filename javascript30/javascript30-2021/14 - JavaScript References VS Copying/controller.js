// start with strings, numbers and booleans
console.log('start with strings, numbers and booleans');
let age = 10;
let age2 = age;
console.log(age, age2);
age = 20;
console.log(age, age2);

let name = 'Omar';
let name2 = name;
console.log(name, name2);
name = 'Bromar';
console.log(name, name2);


// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team);

// You might think we can just do something like this:
team[3] = 'Lux'

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!
console.log(players, team); //! it went back to the reference and updated that too

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice(); //! returns the original array

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
const team5 = Array.from(players);

// now when we update it, the original one isn't changed
team4[3] = 'Wow';

console.log(players, team4);

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
	name: 'Wes Bos',
	age: 28,
};

// and think we make a copy:
const captain = person;
captain.number = 99;

console.log(person, captain);

// how do we take a copy instead?
const captain2 = Object.assign({}, person, {jersey: 'blue', age: 25});
console.log(person, captain2);

// We will hopefully soon see the object ...spread
const captain3 = {...person};
console.log(captain3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
//? Shallow clone, did only 1 level deep
const omar = {
    name: 'Omar',
    age: 39,
    social: {
        twitter: false,
        instagram: true,
    }
}

console.clear();
console.log(omar);

const dev = Object.assign({}, omar);
dev.social.twitter = true;

console.log(dev, omar);

//! "poor man's" way to deep clone
const dev2 = (JSON.parse(JSON.stringify(omar)));
