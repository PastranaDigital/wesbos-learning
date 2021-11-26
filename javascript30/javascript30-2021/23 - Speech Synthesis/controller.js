const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
	voices = this.getVoices();
	// console.log(voices);
	voicesDropdown.innerHTML = voices
		.filter(voice => voice.lang.includes('en'))
        .map((voice) => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
		.join('');
}

function setVoice() {
	console.log('changing voice to ', this.value);
	//? loops over and find the match and then sets it
	msg.voice = voices.find((voice) => voice.name === this.value);
	toggle();
}

function toggle(startOver = true) {
	speechSynthesis.cancel(); //? stops it from speaking
	if (startOver) speechSynthesis.speak(msg);
}

function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
//? if you are passing a parameter in the function then it will only be set on load and then won't call function later
// stopButton.addEventListener('click', toggle(false));
stopButton.addEventListener('click', () => toggle(false));

