let switchButton = document.getElementById('button-add');
let itemsList = document.getElementById('items_List');
let header = document.getElementById('header');
let inputPlace = document.getElementById('inputPlace');
let h1 = document.querySelector('h1');
const maxLength = 10;

inputPlace.addEventListener('keyup', checkInput);
switchButton.addEventListener('click', createList);

function checkInput() {
	if (inputPlace.value.trim()) {
		switchButton.removeAttribute('disabled', '');
	} else {
		switchButton.setAttribute('disabled', '');
	}
}

let count = 0;
function createList() {
	count++;
	let text = inputPlace.value;
	inputPlace.value = '';
	switchButton.setAttribute('disabled', '');

	let listItem = document.createElement('li');
	listItem.addEventListener('dragstart', dragStart, false);
	listItem.addEventListener('dragover', dragOver, false);
	listItem.addEventListener('drop', dropItem, false);
	let paragraph = document.createElement('p');
	let paragraphValue = document.createTextNode(text);
	itemsList.appendChild(listItem);
	listItem.appendChild(paragraph);
	paragraph.appendChild(paragraphValue);
	listItem.setAttribute('draggable', true);

	let checkButton = document.createElement('button');
	let checkIcons = document.createElement('i');
	checkIcons.setAttribute('class', 'material-icons');
	checkIcons.innerHTML = 'check_box_outline_blank';
	checkButton.appendChild(checkIcons);
	listItem.prepend(checkButton);

	let checkedIcon = document.createElement('i');
	checkedIcon.setAttribute('class', 'material-icons');
	checkedIcon.innerHTML = 'check_box';

	let checked = () => {
		if (checkButton.contains(checkIcons)) {
			checkButton.replaceChild(checkedIcon, checkIcons);
		}
	}
	checkButton.addEventListener('click', checked);

	let deleteKey = document.createElement('button');
	let deleteIcon = document.createElement('i');
	deleteIcon.setAttribute('class', 'material-icons');
	deleteIcon.innerHTML = 'delete';
	deleteKey.appendChild(deleteIcon);
	listItem.appendChild(deleteKey);

	let deleteItems = () => {
		listItem.parentNode.removeChild(listItem);
		inputPlace.removeAttribute('disabled', '');
		if (header.contains(document.querySelector('p'))) {
			h1.nextSibling.remove();
		}
		count--;
	}
	deleteKey.addEventListener('click', deleteItems);

	let message = document.createElement('p');
	message.innerHTML = 'Maximum item per list are created';
	if (count >= maxLength) {
		inputPlace.setAttribute('disabled', '');
		document.querySelector('#header').insertBefore(message, h1.nextSibling);
	}

}

let dragdropElement = null;



function dragStart(event) {
	dragdropElement = this;
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
	if (dragdropElement !== this) {
		dragdropElement.innerHTML = this.innerHTML;
		this.innerHTML = event.dataTransfer.getData('text/html');
	}
	return false;
}