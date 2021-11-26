const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    closeAll();
    this.classList.toggle('open');
}

function closeAll() {
    panels.forEach((panel) => {
        panel.classList.remove('open');
    });
}

function toggleActive(e) {
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach((panel) => {
    panel.addEventListener('click', toggleOpen);
    panel.addEventListener('transitionend', toggleActive);
});