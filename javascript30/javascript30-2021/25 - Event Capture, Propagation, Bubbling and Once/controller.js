const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation();  //? stops bubbling up
}

divs.forEach(div => div.addEventListener('click', logText));

//? since all are nested inside eachother, all three are seen
//? this triggers a click on each of these three
