/* 
Note:
I grabbed all the points first then filtered thru the elements. Not sure if this is slower than the FINISHED solution.
*/

const audios = document.querySelectorAll('audio');
const keys = document.querySelectorAll('.key');

document.addEventListener('keydown', (event) => {
	const keyName = event.which;
	playAudio(keyName);
	addClass(keyName);
});

document.addEventListener('keyup', (event) => {
	const keyName = event.which;
	removeClass(keyName);
});

const addClass = (datakey) => {
	let key = Array.from(keys).filter((key) => key.getAttribute('data-key') == datakey);
	key[0].classList.add('playing');
};

const removeClass = (datakey) => {
	let key = Array.from(keys).filter((key) => key.getAttribute('data-key') == datakey);
	key[0].classList.remove('playing');
};

const playAudio = (datakey) => {
	let audio = Array.from(audios).filter((audio) => audio.getAttribute('data-key') == datakey);
	audio[0].play();
};
