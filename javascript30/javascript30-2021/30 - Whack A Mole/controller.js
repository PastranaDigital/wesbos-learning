const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const startButtons = document.querySelectorAll('.start-button');

let score = 0;
let timeUp = false;
const gameTimer = 20;
let lastItem;
//? hard = 1 / med = 3 / easy = 5
let difficulty;

let countdown;
const timerDisplay = document.querySelector('.display__time-left');

function gameOver() {
	startButtons.forEach((btn) => btn.classList.remove('inactive'));
	timeUp = true;
	timerDisplay.classList.add('timers-up');
}

//! -----------------------------------------------------
function resetTimer() {
	clearInterval(countdown);
	timerDisplay.classList.remove('timers-up');
}

function timer(seconds) {
	resetTimer();
	//? this doesn't perform well at scale
	// setInterval(function () {
	// 	seconds--;
	// }, 1000);
	const now = Date.now();
	const then = now + seconds * 1000;
	//? shows the seconds once before the setInterval takes over
	displayTimeLeft(seconds);
	// console.log({ now, then });
	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		//? check if we should stop it
		if (secondsLeft < 0) {
			//? return alone won't stop the interval
			clearInterval(countdown);
			return;
		}

		if (secondsLeft === 0) {
			gameOver();
		}
		//? display it
		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;
	// console.log({ minutes, remainingSeconds });
	const display = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
	document.title = display;
	timerDisplay.textContent = display;
}

//! -----------------------------------------------------

function randomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

//? gets random DOM element from list
function randomHole(items) {
	const idx = Math.floor(Math.random() * items.length);
	const item = items[idx];
	// console.log(item);

	if (item === lastItem) {
		console.log('same one as before');
		return randomHole(items);
	}

	lastItem = item;
	return item;
}

function peep() {
	const time = randomTime(200, 1000) * difficulty;
	const hole = randomHole(holes);
	console.log({ time, hole });
	hole.classList.add('up');
	setTimeout(() => {
		hole.classList.remove('up');
		if (!timeUp) peep();
	}, time);
}

function startGame() {
	startButtons.forEach((btn) => btn.classList.add('inactive'));
	// console.log(this.dataset.difficulty);
	difficulty = this.dataset.difficulty;
	// console.log('start');
	scoreBoard.textContent = 0;
	score = 0;
	timeUp = false;
	peep();
	timer(gameTimer);
	// setTimeout(() => (timeUp = true), gameTimer * 100);
}

function bonk(e) {
	// console.log(e);
	if (!e.isTrusted) return; //? cheater!
	//? Increase score
	score++;
	this.parentNode.classList.remove('up');
	scoreBoard.textContent = score;
}

moles.forEach((mole) => mole.addEventListener('click', bonk));

startButtons.forEach((startButton) => startButton.addEventListener('click', startGame));
