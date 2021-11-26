
//* My attempt at making this more realistic ---------------------------------------------

const state = {
	inboxItems: [
		'This is an inbox layout.',
		'Check one item',
		'Hold down your Shift key',
		'Check a lower item',
		'Everything in between should also be set to checked',
		'Try to do it without any libraries',
		'Just regular JavaScript',
		'Good Luck!',
        'Lorem Ipsum',
		"Don't forget to tweet your result!",
	],
};

const inbox = document.querySelector('.inbox');


const init = () => {
	let html = '';
	state.inboxItems.forEach((item) => {
		html += `
        <div class="item">
            <input type="checkbox">
            <p>${item}</p>
        </div>
    `;
	});
    inbox.insertAdjacentHTML('beforeend', html);
};

init();

//* My attempt at making this more realistic ---------------------------------------------
//* END

let lastChecked;

function handleCheck (e) {
    //? check if shift key is down
    //? AND check that they are checking the box
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        //? go ahead and do what we please
        //? loop over every single checkbox
        checkboxes.forEach(checkbox => {
            // console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if(inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
    // console.log(e);
}
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
checkboxes.forEach( checkbox => checkbox.addEventListener('click', handleCheck)); //? will run also for keyboard actions

const button = document.querySelector('button');

const handleReset = () => {
    let inBetween = false;
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

button.addEventListener('click', handleReset);