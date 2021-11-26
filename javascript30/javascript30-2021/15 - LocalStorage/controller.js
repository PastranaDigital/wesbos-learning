const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const checkAllBtn = document.querySelector('.check');
const uncheckAllBtn = document.querySelector('.uncheck');
const resetAllBtn = document.querySelector('.reset');
let items = JSON.parse(localStorage.getItem('items')) || [];

function updateAndRender(items, itemsList) {
    //? update local storage
    localStorage.setItem('items', JSON.stringify(items));
    //? render updated details
    populateList(items, itemsList);
}

function addItem(e) {
    e.preventDefault();
    //? looking inside the addItems selected element
    const text = this.querySelector('[name=item]').value;
    const item = {
        text: text, //? could also just have text once since they are both the same name
        done: false,
    };
    //? resets the input
    items.push(item);
    updateAndRender(items, itemsList);
    this.reset(); 
}

function toggleDone(e) {
    // console.log(e); //? gives us the item & checkbox too
    if(!e.target.matches('input')) return; //? guard clause to skip unless it's an input (what we want)
    // console.log(e.target);
    //? go to items array and toggle the 'done'
    const el = e.target;
    const index = el.dataset.index;
    console.log(el.dataset.index);
    items[index].done = !items[index].done;
    updateAndRender(items, itemsList);
}

function changingAll(e) {
    console.log(e.target.classList.value);
    const action = e.target.classList.value;
    items.forEach(item => {
        item.done = action === 'check' ? true : false;
    });
    updateAndRender(items, itemsList);
}

function resetList() {
    items = [];
    updateAndRender(items, itemsList);
}

//? plates has the default to an empty array so when we call it, regardless, it will run cleanly
//? the function is built to accept parameters instead of being tied down to existing values. It means it can be used in multiple places if needed.
function populateList(plates = [], platesList) {
    if(!plates[0]) return platesList.innerHTML = '<li>Enter Your Tapas...</li>';

    platesList.innerHTML = plates.map((plate, index) => {
        return `
            <li>
                <input type="checkbox" data-index=${index} id="item${index}" ${plate.done ? 'checked' : ''} />
                <label for="item${index}">${plate.text}</label>
            </li>
        `;
    }).join(''); //? map returns an array but we need one big string for innerHTML so the join('') lets us get that
}

//? submit we will be able to check if they hit enter on the button
addItems.addEventListener('submit', addItem);
//? instead of listening to each list item (some of which aren't there at the beginning of render). We will listen to the parent element and get details as needed
itemsList.addEventListener('click', toggleDone);

checkAllBtn.addEventListener('click', changingAll);
uncheckAllBtn.addEventListener('click', changingAll);
resetAllBtn.addEventListener('click', resetList);

populateList(items, itemsList);

