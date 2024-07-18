const endpoint =
	'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
let citiesPrettier = [];

const input = document.querySelector('input');

const ulContainer = document.querySelector('.suggestions');
ulContainer.innerHTML = '<li>Filter for a city</li> <li>or a state</li>';

let results = [];

function updateScreen(list) {
	if (!list) return (ulContainer.innerHTML = '<li>Filter for a city</li> <li>or a state</li>');
	if (list.length == 0) return (ulContainer.innerHTML = '<li>No Results Found</li>');

	ulContainer.innerHTML = list
		.map((city) => `<li><span>${city.cityState}</span><span class="population">${city.population}</span></li>`)
		.join('');
}

function highlight(str, query) {
	let arr = str.split(query);
	return arr.map((element) => '<span>' + element + '</span>').join('<span class="hl">' + query + '</span>');
}

function searchTheData() {
	let query = this.value.toLowerCase();
	if (query.length < 2) return updateScreen(null);
	results = citiesPrettier.filter((city) => city.cityState.toLowerCase().includes(query));
	let resultsWithStrings = results.map((city) => {
		return { cityState: highlight(city.cityState, query), population: city.population };
	});
	//? update the screen
	updateScreen(resultsWithStrings);
}

input.addEventListener('input', searchTheData);

const clearButton = document.querySelector('.clearBtn');
clearButton.addEventListener('click', () => {
	input.value = '';
	ulContainer.innerHTML = '<li>Filter for a city</li> <li>or a state</li>';
});

function addCommas(number) {
	if (number.length > 6) {
		return number.slice(0, -6) + ',' + number.slice(-6, -3) + ',' + number.slice(-3);
	}
	if (number.length > 3) {
		return number.slice(0, -3) + ',' + number.slice(-3);
	}
}

function makeCitiesPretty(list) {
	return {
		cityState: `${list.city}, ${list.state}`,
		population: addCommas(list.population),
	};
}

fetch(endpoint)
	.then((blob) => blob.json())
	.then((data) => {
		cities.push(...data);
		citiesPrettier = cities.map((city) => makeCitiesPretty(city));
		// console.table(citiesPrettier);
	})
	.catch((error) => console.error(error));

//? make text that matches be in the class '.hl'

// identify the match
// pull the matching text from the string
// wrap matching text with a <span class="hl"></span> tag
// put the string back together
