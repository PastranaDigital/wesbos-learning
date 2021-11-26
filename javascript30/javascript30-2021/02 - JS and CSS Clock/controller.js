// let today = new Date();
// let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// let todayHours = today.getHours();
// let todayMinutes = today.getMinutes();
// let todaySeconds = today.getSeconds();
// console.log(todayHours, todayMinutes, todaySeconds);

const setHands = () => {
    let today = new Date();
    // let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let todayHours = today.getHours();
    let todayMinutes = today.getMinutes();
    let todaySeconds = today.getSeconds();

    //? Hour Hand
    //! 360 / 12 = 30 degrees each
    let hourHand = document.querySelector('.hour-hand');
    //! in 1 hour, the hour hand travels 30 degrees... 30 / 60 = .5 degree every second
    hourHand.style.transform = `rotate(${90 + (todayHours * 30) + (todayMinutes * .5)}deg)`;

    //? Min Hand
    //! 360 / 60 = 6 degrees each
    let minHand = document.querySelector('.min-hand');
    //! in 1 minute, the min hand travels 6 degrees... 6 / 60 = .1 degree every second
    minHand.style.transform = `rotate(${90 + (todayMinutes * 6) + (todaySeconds * .1)}deg)`;
    //! 10:15:00 = 90 + 90deg
    //! 10:15:45 = 90 + 90deg + 4.5deg

    //? Min Hand
    //! 360 / 60 = 6 degrees each
    let secondHand = document.querySelector('.second-hand');
    secondHand.style.transform = `rotate(${90 + (todaySeconds * 6)}deg)`;
}

setInterval(setHands, 1000);