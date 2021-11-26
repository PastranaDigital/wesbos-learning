const endpoint =
	'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => {
        cities.push(...data);
        console.log(cities);
    })
    .catch(err => console.log(err.message))

const findMatches = (wordToMatch, cities) => {
    return cities.filter(place => {
        //? figure out if the sity or state matches what was searched
        //? g = globally search
        //? i = insensitive, irrelevant of upper or lower case
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
}

const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

function displayMatches () {
    // console.log(this.value);
    const matchArray = findMatches(this.value, cities);
    // console.table(matchArray.length);
    if(this.value === '') return suggestions.innerHTML = `
        <li>Filter for a city</li>
        <li>or a state</li>
    `;

    if(matchArray.length === 0) return suggestions.innerHTML = `
        <li>No matching results found</li>
    `;

    //? my way
    // let html = '';
    // matchArray.forEach(place => {
    //     html += `
    //         <li>
    //             <span class="name">${place.city}, ${place.state}<span>
    //             <span class="population">${place.population}</span>
    //         </li>
    //     `;
    // });
    // suggestions.innerHTML = '';
    // suggestions.insertAdjacentHTML('beforeend', html);

    //? his way
    const html = matchArray.map(place => {
        const regex = RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;

}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

