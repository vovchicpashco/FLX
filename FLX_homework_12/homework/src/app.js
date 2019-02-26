const rootNode = document.getElementById('root');
let todoItems = [];

const storage = {
    addItem(description) {
        const id = 'task' + new Date().getTime();
        const item = { id, description, isDone: false };
        todoItems.push(item);
        localStorage.setItem('todoItems', JSON.stringify(todoItems));

        return todoItems;
    },

    getAll() {
        return JSON.parse(localStorage.getItem('todoItems'));
    },

    getById(id) {
        return this.getAll().find(item => item.id === id);
    },

    removeById(id) {
        const updatedList = this.getAll().filter(item => item.id !== id);

        localStorage.setItem('todoItems', JSON.stringify(updatedList));

        return todoItems;
    },

    getDone() {
        return this.getAll().filter(item => item.isDone === true);
    },

    getUndone() {
        return this.getAll().filter(item => item.isDone === false);
    },
    setAsDoneById(id) {
        const updatedList = this.getAll().map(item => {
            if (item.id === id) {
                item.isDone = true;
            }

            return item;
        });

        localStorage.setItem('todoItems', JSON.stringify(updatedList));

        return todoItems;
    },

    changeDescription(id, descr) {
        const updatedList = this.getAll().map(item => {
            if (item.id === id) {
                item.description = descr;
            }

            return item;
        });

        localStorage.setItem('todoItems', JSON.stringify(updatedList));

        return todoItems;
    },

    getSorted() {
        return this.getUndone().concat(this.getDone());
    }
}

function createElement(tag, attr, innerText) {
    const newElem = document.createElement(tag);

    if (Object.keys(attr).length) {
        for (let key in attr) {
            if (attr.hasOwnProperty(key)) {
                newElem.setAttribute(key, attr[key]);
            }
        }
    }

    if (innerText) {
        newElem.appendChild(document.createTextNode(innerText));
    }

    return newElem;
}

const templateApp = {
    addItemPage() {
        const sectionAdd = createElement('section', { 'class': 'add' });
        const heading = createElement('h1', {}, 'Add task');
        const footerAdd = createElement('footer', { 'class': 'add' });
        const inputFields = createElement('input',
            { 'class': 'input', 'type': 'text', 'placeholder': 'Task description' });
        const saveBtn = createElement('button', { 'class': 'save-btn', 'disabled': 'true' }, 'Save changes');
        const cancelBtn = createElement('button', { 'class': 'cancel-btn' }, 'Cancel');

        sectionAdd.appendChild(heading);
        sectionAdd.appendChild(inputFields);
        footerAdd.appendChild(cancelBtn);
        footerAdd.appendChild(saveBtn);
        sectionAdd.appendChild(footerAdd);

        inputFields.onchange = inputFields.onkeyup = () => {
            const description = inputFields.value.trim();

            saveBtn.disabled = !description;
        }

        saveBtn.addEventListener('click', () => {
            storage.addItem(inputFields.value.trim());
            window.location.hash = '/main';

        });

        cancelBtn.addEventListener('click', () => {
            window.location.hash = '/main';
        });

        return sectionAdd;
    },

    modifyItemPage(item) {
        const sectionModify = this.addItemPage();

        sectionModify.querySelector('h1').innerText = 'Modify item';
        sectionModify.querySelector('input').value = item.description;

        sectionModify.querySelector('.save-btn').onclick = () => {
            storage.changeDescription(item.id, sectionModify.querySelector('input').value.trim());
            window.location.hash = '/main'
        };

        return sectionModify;
    },

    mainPage(todoItems) {
        const sectionMain = createElement('section', { 'class': 'main' });
        const heading = createElement('h1', {}, 'Simple TODO application');
        const buttonAdd = createElement('button', { 'class': 'addNewTask-btn' }, 'Add new task');
        const paragraph = createElement('p', { 'class': 'emptyList' }, 'TODO is empty');
        const todoList = createElement('ul', { 'class': 'todoList' });

        if (todoItems.length) {
            for (let item of todoItems) {
                const li = createElement('li', { 'id': item.id });
                const checkbox = createElement('button',
                    { 'class': item.isDone ? 'checkbox-done' : 'checkbox-undone' });
                const text = createElement('button', { 'class': 'todo-text' }, item.description);
                const remove = createElement('button', { 'class': 'remove-btn' });

                checkbox.onclick = () => {
                    if (checkbox.className === 'checkbox-undone') {
                        checkbox.className = 'checkbox-done';
                        storage.setAsDoneById(item.id);
                        text.classList.add('marked');
                        todoList.appendChild(li);
                    } else {
                        checkbox.className = 'checkbox-undone';
                    }

                };

                remove.onclick = () => {
                    li.remove();
                    storage.removeById(item.id);
                };

                text.onclick = () => {
                    window.location.hash = `/modify/${item.id}`;
                };

                li.appendChild(checkbox);
                li.appendChild(text);
                li.appendChild(remove);
                todoList.appendChild(li);
            }
        }

        buttonAdd.addEventListener('click', () => {
            window.location.hash = '/add';
        });

        sectionMain.appendChild(heading);
        sectionMain.appendChild(buttonAdd);
        sectionMain.appendChild(todoList);
        sectionMain.appendChild(paragraph);

        return sectionMain;
    }
}



const guide = {
    load() {
        const hash = window.location.hash;

        if (hash.endsWith('/add')) {
            this.add();
        } else if (hash.endsWith('/main') || !hash) {
            this.main(todoItems);
        } else {
            const id = hash.slice(hash.lastIndexOf('/') + 1);
            this.modify(id);
        }
    },

    main() {
        document.title = 'Main Page';

        rootNode.innerHTML = '';
        rootNode.appendChild(templateApp.mainPage(todoItems));

    },

    add() {
        document.title = 'Add New Task';

        rootNode.innerHTML = '';
        rootNode.appendChild(templateApp.addItemPage());

    },

    modify(id) {
        const item = storage.getById(id);

        document.title = 'Modify';

        rootNode.innerHTML = '';
        rootNode.appendChild(templateApp.modifyItemPage(item));

    }
};


window.onload = window.onhashchange = () => {
    if (localStorage.getItem('todoItems')) {
        todoItems = storage.getSorted();
    }
    guide.load();
};