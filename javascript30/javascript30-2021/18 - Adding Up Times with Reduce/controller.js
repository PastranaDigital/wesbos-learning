const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        // console.log(mins,secs); //? these are strings :( unless we use .map(parseFloat)
        return (mins * 60) + secs;
}).reduce((total, vidSeconds) => total + vidSeconds)

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600; //? gives us the remainder
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60; //? gives us the remainder

console.log(`${hours}hrs ${mins}mins ${secondsLeft}secs`);
console.log(`${hours} : ${mins} : ${secondsLeft}`);