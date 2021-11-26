// const input = ['a','b','a','b','c','d','e','f','g','h'];
// const answer = ['a','b','c','d','e','f','g','h'];
// const notAnswer = ['c','d','e','f','g','h'];

// function checkSequence(inputSequence) {
//     console.log('...checking');
//     if(inputSequence.length < answer.length) return;
//     console.log('cleared first check');
//     //? make a new array (answer array length) from the inputSequence's last values (chop off the end values)
//     const finalInput = inputSequence.slice(inputSequence.length - answer.length);
//     console.log(...finalInput);
//     console.log(...answer);
//     if(finalInput == answer) console.log('hurray!');
//     //? check it against the answer array
// }

// checkSequence(input);
// // checkSequence(answer);
// // checkSequence(notAnswer);

const pressed = [];
const secretCode = ['e','v','a'];

window.addEventListener('keyup', (e) => {
    // console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if(pressed.join('').includes(secretCode.join(''))) {
        console.log('DING DING!');
        cornify_add();
    }
    // console.log(...pressed);
})