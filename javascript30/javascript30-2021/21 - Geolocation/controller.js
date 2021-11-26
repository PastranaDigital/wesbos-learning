const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(data => {
    console.log(data);
    speed.textContent = data.coords.speed / 1.6;
    arrow.getElementsByClassName.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.error(err);
    alert('Hey, you need to allow access');
});