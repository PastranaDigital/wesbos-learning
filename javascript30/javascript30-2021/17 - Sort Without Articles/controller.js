const bands = [
	'The Plot in You',
	'The Devil Wears Prada',
	'Pierce the Veil',
	'Norma Jean',
	'The Bled',
	'Say Anything',
	'The Midway State',
	'We Came as Romans',
	'Counterparts',
	'Oh, Sleeper',
	'A Skylit Drive',
	'Anywhere But Here',
	'An Old Dog',
];

const bands2 = ['The Charlie', 'A Bravo', 'An Alpha', 'The Delta', 'Echo and the Foxtrot'];
const articles = ['a', 'an', 'the'];
const list = document.querySelector('#bands');

const renderList = (data) => {
    list.innerHTML = data
		.map((item) => {
			return `
                <li>${item.original}</li>
            `;
		})
		.join('');
};

/*
[
    {
        original: 'The Charlie',
        edited: 'Charlie'
    },
    {
        original: 'A Bravo',
        edited: 'Bravo'
    },
]
*/

const sortWithoutArticles = (array, articles) => {
	//? compare array item to articles
	let tempData = [];
	array.forEach((item) => {
		let tempObj = {};
        tempObj.original = item;

        let splitItem = item.split(' ');
		articles.forEach((article) => {
			if (splitItem[0].toLowerCase() === article) {
				splitItem.splice(0, 1);
			}
		});
        
        //? save the result into temp object
        tempObj.edited = splitItem.join(' ');
		tempData.push(tempObj);
	});
    
	//? sort temp data
	// console.table(tempData);
    tempData.sort((a,b) => (a.edited > b.edited) ? 1 : -1);
	// console.table(tempData);

	//? render list
	renderList(tempData);
};

// sortWithoutArticles(bands, articles);

//! my solution above

//! his solution below
//? used regex to aid the sort
//? used custom sort to shrink the code

const strip = (bandName) => bandName.replace(/^(a |the |an )/i, '').trim();
const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);
document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');