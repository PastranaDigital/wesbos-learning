const panels = document.querySelectorAll('.panel');

function removeFromAll(className) {
	panels.forEach((element) => {
		element.classList.remove(className);
	});
}

//? needs to be a funciton so it can have the "this" context
function toggleOpen() {
	// removeFromAll('open');
	this.classList.toggle('open');
	// this.active();
}

function addActiveClass(e) {
	// removeFromAll('open-active');
	// this.classList.add('open-active');
	if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
}

panels.forEach((element) => element.addEventListener('mouseover', toggleOpen));
panels.forEach((element) => element.addEventListener('transitionend', addActiveClass));
