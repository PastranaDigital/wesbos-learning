const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
	console.log(e);
	const y = e.pageY - this.offsetTop;
	const percent = (y / this.offsetHeight) * 100;
	console.log(percent);
	const min = 0.5;
	const max = 4;
	const height = Math.round(percent) + '%';
	bar.style.height = height;
	const playbackRate = (((max - min) * percent) / 100 + min).toFixed(1);
	bar.textContent = `${playbackRate}x`;
	video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);
