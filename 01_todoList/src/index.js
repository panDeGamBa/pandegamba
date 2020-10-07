const INPUT_ELEMENT = document.querySelector('.todo__input');
const LIST_ELEMENT_TODO = document.querySelector('.todo__ul--todo');
const LIST_ELEMENT_DONE = document.querySelector('.todo__ul--done');
const BUTTON_ELEMENT = document.querySelector('.todo__button');
let INDEX = 0;

function load() {
    BUTTON_ELEMENT.addEventListener('click', (e) => {
        e.preventDefault();
        add();
    });
}

async function add(value = INPUT_ELEMENT.value, list = LIST_ELEMENT_TODO, isChecked = false) {
    const el = renderLi(value, isChecked);
    list.append(el);
    INDEX++;
    INPUT_ELEMENT.value = '';
}

function renderLi(value, isChecked = false) {
    const el = document.createElement('li');
    el.classList.add('todo__li');
    el.innerHTML = `
        <input id="check${INDEX}" class="todo__checkbox" type="checkbox" value="${value}" ${isChecked ? 'checked' : ''}>
        <label for="check${INDEX}" class="todo__label" >
            <span class="todo__checkIcon"></span>
            <p class="todo__text">${value}</p>
        </label>
        <span onclick="remove(this)" class="todo__deleteBtn">x</span>
    `;

    eventsList(el);

    return el;
}

function eventsList(el) {
    el.addEventListener('change', function (e) {
        e.preventDefault();
        const input = el.querySelector('input');
        el.remove();

        input.checked
            ? add(input.value, LIST_ELEMENT_DONE, true)
            : add(input.value, LIST_ELEMENT_TODO)
    })
}

async function remove(e){
    e.parentNode.remove();
}

load();



