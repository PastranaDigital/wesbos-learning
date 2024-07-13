/*
Note:
Again I grabbed the info once and then did math to find he updated solution inside of the setInterval. Should have put the today = new Date() stuff inside the setInterval
*/

const today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

const degreesPerHour = 30;
const degreesPerMinOrSec = 6;

const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.second-hand');

hourHand.style.transform = `rotate(${hours * degreesPerHour + 90}deg)`;
minHand.style.transform = `rotate(${minutes * degreesPerMinOrSec + 90}deg)`;
secHand.style.transform = `rotate(${seconds * degreesPerMinOrSec + 90}deg)`;

setInterval(() => {
	seconds++;
	secHand.style.transform = `rotate(${seconds * degreesPerMinOrSec + 90}deg)`;
	if (seconds % 60 == 0) {
		minutes++;
		minHand.style.transform = `rotate(${minutes * degreesPerMinOrSec + 90}deg)`;
	}
	if (minutes % 60 == 0) {
		hours++;
		hourHand.style.transform = `rotate(${hours * degreesPerHour + 90}deg)`;
	}
}, 1000);
