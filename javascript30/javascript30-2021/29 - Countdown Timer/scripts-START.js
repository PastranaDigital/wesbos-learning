let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const timerBtns = document.querySelectorAll('[data-time]');
const timerInput = document.querySelector('#custom');

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
	displayEndTime(then);
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
			timerDisplay.classList.add('timers-up');
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

function displayEndTime(timestamp) {
	const end = new Date(timestamp);
	const hour = end.getHours();
	const minutes = end.getMinutes();
	endTime.textContent = `Be back at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

timerBtns.forEach((btn) => {
	btn.addEventListener('click', function (e) {
		console.log(+this.dataset.time);
		timer(+this.dataset.time);
	});
});

//? could have used document.customForm since the customForm is the name property of the element
timerInput.addEventListener('submit', function (e) {
	e.preventDefault();
	const seconds = +this.minutes.value * 60;
	console.log(seconds);
	timer(seconds);
	//? clears the input box
	this.reset();
});

// timer(75);
