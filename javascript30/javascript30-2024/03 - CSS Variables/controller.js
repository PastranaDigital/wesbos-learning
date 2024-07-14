/*
Note:
struggled to get this to do the thing on my own
*/

const inputs = document.querySelectorAll('.controls input');

const initializeInputs = (value, element) => {
	// console.log('value: ', value);
	// console.log('element.value: ', element.value);
	// set the value of the element to the css value to start
	// document.documentElement.style.setProperty(`--${element.name}`, value);
	element.value = value;
	// console.log('element.value2: ', element.value);
};

// const updateInputs = () => {
// 	console.log('this: ', JSON.stringify(this));
// 	console.log(`--${this.name}`, this.value);
// 	document.documentElement.style.setProperty(`--${this.name}`, this.value);
// };

inputs.forEach((input) => {
	// grab init value from the css
	let value = getComputedStyle(document.documentElement).getPropertyValue(`--${input.name}`).split('px');
	initializeInputs(value[0], input);
	// input.addEventListener('change', updateInputs);
});

function handleUpdate() {
	const suffix = this.dataset.sizing || '';
	// console.log('suffix: ', suffix);
	document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

inputs.forEach((input) => input.addEventListener('change', handleUpdate));
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));
