
let list = document.querySelector('.task_list');
let inputElem = document.querySelector('.text');
let divElem = document.querySelector('.list');


const addTask = function() {
  document.querySelector('input').addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        taskElem(this.value);
        inputElem.value = '';
    }
  });
};

const taskElem = function (textTask) {
    let formElem = document.createElement('form');
    divElem.append(formElem);

    let checkElem = document.createElement('input');
    checkElem.setAttribute('id', 'check');
    checkElem.setAttribute('type', 'checkbox');
    checkElem.classList.add('input_check');
    formElem.append(checkElem);

    let labelElem = document.createElement('label');
    labelElem.setAttribute('for', 'check');
    labelElem.classList.add('label_check');
    labelElem.innerHTML = textTask;
    formElem.append(labelElem);

    let btnChange = document.createElement('button');
    btnChange.innerHTML = '&#9998';
    formElem.append(btnChange);

    let change = function() {
        let changeElem = prompt ('Изменить?');
    };

    btnChange.addEventListener('click', change);

    // if (btnChange.addEventListener('click', change)) {
    //     labelElem.innerHTML = changeElem;
    // }
    //не придумала как присвоить значение changeElem (prompt) в taskElem.

};

const clearList = function() {
    divElem.innerHTML = '';
};

const changeTask = function() {
    let change = function() {
        let changeElem = prompt ('Изменить?');
    }
    btnChange.addEventListener('click', change ());
};

let btnClear = document.createElement('button');
btnClear.innerHTML = 'Clear list';
btnClear.classList.add('btn_clear')
divElem.after(btnClear);

btnClear.addEventListener('click', clearList);

addTask();

