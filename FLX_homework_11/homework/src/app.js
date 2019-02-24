let inputField = document.getElementById('inputField');
let disableButton = document.getElementById('button');
let itemsList = document.getElementById('itemsList');
let header = document.getElementById('header');
let h1 = document.querySelector('h1');
let maxNumber = 10;

inputField.addEventListener('keyup', checkInput);
disableButton.addEventListener('click', createList);

function checkInput() {
	if (inputField.value.trim()) {
		disableButton.removeAttribute('disabled', '');
	} else {
		disableButton.setAttribute('disabled', '');
	}
}

let count = 0;
function createList() {
	count ++;
	let text = inputField.value;
	inputField.value = '';
	disableButton.setAttribute('disabled', '');

	let li = document.createElement('li');
	li.addEventListener('dragstart', dragStart, false);
	li.addEventListener('dragover', dragOver, false);
	li.addEventListener('drop', dropItem, false);
	let p = document.createElement('p');
	let pValue = document.createTextNode(text);
	itemsList.appendChild(li);
	li.appendChild(p);
	p.appendChild(pValue);	
    li.setAttribute('draggable', true);

	let checkButton = document.createElement('button');
	let checkIcon = document.createElement('i');
	checkIcon.setAttribute('class','material-icons');
	checkIcon.innerHTML = 'check_box_outline_blank';
	checkButton.appendChild(checkIcon);
	li.prepend(checkButton);

	let checkedIcon = document.createElement('i');
    checkedIcon.setAttribute('class', 'material-icons');
    checkedIcon.innerHTML = 'check_box';

	let checked = () => {
		if (checkButton.contains(checkIcon)) {
			checkButton.replaceChild(checkedIcon, checkIcon);
		}
	}
	checkButton.addEventListener('click', checked);

	let deleteButton = document.createElement('button');
	let deleteIcon = document.createElement('i');
	deleteIcon.setAttribute('class','material-icons');
	deleteIcon.innerHTML = 'delete';
	deleteButton.appendChild(deleteIcon);
	li.appendChild(deleteButton);

	let deleteItem = () => {
		li.parentNode.removeChild(li);
		inputField.removeAttribute('disabled', '');
		if (header.contains(document.querySelector('p'))) {
            h1.nextSibling.remove();
        }
		count--;
	}
	deleteButton.addEventListener('click', deleteItem);

	let message = document.createElement('p');
	message.innerHTML = 'Maximum item per list are created';
	if (count >= maxNumber ) {		
		inputField.setAttribute('disabled', '');
        document.querySelector('#header').insertBefore(message, h1.nextSibling);
	}

}

let dragElement = null;

function dragStart(event) {
    dragElement = this;
	event.dataTransfer.effectAllowed = 'move';
	event.dataTransfer.setData('text/html', this.innerHTML);
}
function dragOver(event) {
    if (event.preventDefault) {
		event.preventDefault();
	}
	return false;
}
function dropItem(e) {
	if (dragElement !== this) {
		dragElement.innerHTML = this.innerHTML;
		this.innerHTML = event.dataTransfer.getData('text/html');
	}
	return false;
}