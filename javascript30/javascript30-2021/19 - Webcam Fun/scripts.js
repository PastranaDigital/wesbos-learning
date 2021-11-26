const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const redEffectBtn = document.querySelector('.redEffect');
const rgbSplitBtn = document.querySelector('.rgbSplit');
let redEffectActive = false;
let rgbSplitActive = false;

function getVideo() {
	navigator.mediaDevices
		.getUserMedia({ video: true, audio: false })
		.then((localMediaStream) => {
			console.log(localMediaStream);
			// video.src = window.URL.createObjectURL(localMediaStream); //! deprecated
			video.srcObject = localMediaStream;
			video.play();
		})
		.catch((err) => console.error('OH NOOO!', err));
}

function paintToCanvas() {
	const width = video.videoWidth;
	const height = video.videoHeight;
	console.log(width, height);
	canvas.width = width;
	canvas.height = height;

	return setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height);
		//? take pixels out
		let pixels = ctx.getImageData(0, 0, width, height);
		//* returns the following values for each pixel [1:Red 2:Green 3:Blue 4:Alpha] repeating every 4 values
		// console.log(pixels); //! may crash the browser as it will display the details of every pixel

		//? mess with pixels
		if (redEffectActive) pixels = redEffect(pixels);
		if (rgbSplitActive) pixels = rgbSplit(pixels);

		//? return pixels
		ctx.putImageData(pixels, 0, 0);
	}, 16); //? 16ms works for most
}

function takePhoto() {
	snap.currentTime = 0;
	snap.play();

	//? take the data out of the canvas
	const data = canvas.toDataURL('image/jpg');
	// console.log(data); //? text based representation of the image
	const link = document.createElement('a');
	link.href = data;
	link.setAttribute('download', 'snapshot');
	// link.textContent = 'Download Image';
	link.innerHTML = `<img src=${data} alt="Snapshot Photo" />`;
	strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
	for (let i = 0; i < pixels.data.length; i += 4) {
		pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
		pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
		pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
	}
	return pixels;
}

function rgbSplit(pixels) {
	for (let i = 0; i < pixels.data.length; i += 4) {
		pixels.data[i - 100] = pixels.data[i + 0]; // RED
		//   pixels.data[i + 50] = pixels.data[i + 1]; // GREEN
		pixels.data[i - 50] = pixels.data[i + 2]; // Blue
	}
	return pixels;
}

function greenScreen(pixels) {
	const levels = {};

	document.querySelectorAll('.rgb input').forEach((input) => {
		levels[input.name] = input.value;
	});

	for (i = 0; i < pixels.data.length; i = i + 4) {
		red = pixels.data[i + 0];
		green = pixels.data[i + 1];
		blue = pixels.data[i + 2];
		alpha = pixels.data[i + 3];

		if (
			red >= levels.rmin &&
			green >= levels.gmin &&
			blue >= levels.bmin &&
			red <= levels.rmax &&
			green <= levels.gmax &&
			blue <= levels.bmax
		) {
			// take it out!
			pixels.data[i + 3] = 0;
		}
	}

	return pixels;
}

redEffectBtn.addEventListener('click', redEffectToggle);
rgbSplitBtn.addEventListener('click', rgbSplitToggle);

function redEffectToggle(e) {
	redEffectActive = !redEffectActive;
    // console.log(e.target);
    const input = this.querySelector('input');
    input.checked = `${redEffectActive ? 'checked' : ''}`;
    // console.log(input);
}

function rgbSplitToggle(e) {
	rgbSplitActive = !rgbSplitActive;
    const input = this.querySelector('input');
    input.checked = `${rgbSplitActive ? 'checked' : ''}`;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
