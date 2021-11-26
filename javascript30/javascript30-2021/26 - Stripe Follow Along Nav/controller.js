const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
	// console.log('Enter!');
	this.classList.add('trigger-enter');
	setTimeout(() => {
		if (this.classList.contains('trigger-enter')) {
			this.classList.add('trigger-enter-active');
		}
	}, 150);
	background.classList.add('open');

	//? this will find the ONE dropdown inside the clicked section
	const dropdown = this.querySelector('.dropdown');
	// console.log(dropdown);
	const dropdownCoords = dropdown.getBoundingClientRect();
	const navCoords = nav.getBoundingClientRect();
	// console.log(dropdownCoords);

	const coords = {
		height: dropdownCoords.height,
		width: dropdownCoords.width,
		top: dropdownCoords.top - navCoords.top,
		left: dropdownCoords.left - navCoords.left,
	};

	background.style.setProperty('width', `${coords.width}px`);
	background.style.setProperty('height', `${coords.height}px`);
	background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
	// console.log('Leave!');
	this.classList.remove('trigger-enter-active');
	setTimeout(() => this.classList.remove('trigger-enter'), 0);
	background.classList.remove('open');
}

triggers.forEach((trigger) => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach((trigger) => trigger.addEventListener('mouseleave', handleLeave));
