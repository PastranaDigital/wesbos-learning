//? how it started
// const spacingInput = document.querySelector('#spacing');
// const blurInput = document.querySelector('#blur');
// const baseInput = document.querySelector('#base');

// // console.log(spacingInput.value, blurInput.value, baseInput.value);

// spacingInput.addEventListener('change', () => {
// 	console.log('change', spacingInput.value);
// });

// blurInput.addEventListener('change', () => {
// 	console.log('change', blurInput.value);
// });

// baseInput.addEventListener('change', () => {
// 	console.log('change', baseInput.value);
// });

const inputs = document.querySelectorAll('.controls input');

//? how it finished
//! was erroring when I had this as an () => {} arrow function
function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
	// console.log(this);
	// console.log(this.value);
};

// console.log(inputs);

inputs.forEach((input) => {
	input.addEventListener('change', handleUpdate);
	input.addEventListener('mousemove', handleUpdate);
});