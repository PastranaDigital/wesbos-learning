const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100; //? 100px

function shadow(e) {
	// const width = hero.offsetWidth;
	// const height = hero.offsetHeight;
	//? ES6 destructuring style
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    // console.log(x,y); //? showing us the x & y of the element
    //? this = what we listened on
    //? e.target = the thing that it triggered on
    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk /2));
    const yWalk = Math.round((y / height * walk) - (walk /2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 10px rgba(255,0,255,0.25)`;
}

hero.addEventListener('mousemove', shadow);
