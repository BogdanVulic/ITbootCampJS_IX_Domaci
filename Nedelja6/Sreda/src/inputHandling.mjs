import service from './service.mjs';
import DOM from './addingToDOM.mjs';

const inputDesc = document.querySelector('#input-desc');
const inputDone = document.querySelector('#input-done');
const btnSubmit = document.querySelector('#btn-submit');
let itemContainer = document.querySelector('#item-container');


const makeObjOfInput = (inputDesc, inputDone) => {
    let obj = {
        desc: inputDesc.value,
        done: inputDone.checked
    }
    return obj;
};

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    service.add(makeObjOfInput(inputDesc, inputDone))
    itemContainer.innerHTML = '';
    DOM.display();
})

export default { 
    makeObjOfInput,
    inputDesc,
    inputDone,
    btnSubmit
}
