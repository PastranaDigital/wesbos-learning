const slider = document.querySelector('.items');
// const divs = document.querySelectorAll('.item');

let isDown = false;
let startX;
let scrollLeft;
const scrollSpeed = 3;

slider.addEventListener('mousedown', (e) => {
	isDown = true;
	slider.classList.add('active');
	// console.log(e.pageX);
	//? this calculates based on whether there is a margin or not. It looks at only the items div
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
	isDown = false;
	slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
	isDown = false;
	slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
	if (!isDown) return;
	// console.count(isDown);
	// console.log('Do work');
	e.preventDefault();
	//? where is the cursor when they move it?
	const x = e.pageX - slider.offsetLeft;
	//? x will be recalculated as we move, startX will not
	//? logging these in an object shows the names
	console.log({ x, startX });
	const walk = (x - startX) * scrollSpeed;
	slider.scrollLeft = scrollLeft - walk;
});
