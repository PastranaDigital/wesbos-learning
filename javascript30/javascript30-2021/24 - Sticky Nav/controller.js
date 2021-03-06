const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;
console.log(topOfNav);
// console.log(scrollY);

function fixNav() {
    // console.log(scrollY, topOfNav);
    if (window.scrollY >= topOfNav) {
        //? without this, the element jumps up
        document.body.style.paddingTop = `${nav.offsetHeight}px`;
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav);