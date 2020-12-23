let buttonOrder = document.querySelector("#order");
let buttonOrder2 = document.querySelector("#order2");
let buttonOrderNow = document.querySelector("#order_now");
let buttonOrderNow2 = document.querySelector("#order_now2");
let body = document.querySelector('#body');
let counter = 0;
buttonOrder.addEventListener('click', () => {
    counter++;
})
buttonOrder2.addEventListener('click', () => {
    counter++;
})
buttonOrderNow.addEventListener('click', () => {
    let p = document.createElement('p');
    if(counter == 0){
        window.alert('You must order at least one pizza')
    }else if(counter == 1){
        p.innerText = `You ordered ${counter} pizza, [${new Date()}]`
    }else if(counter > 1){
        p.innerText = `You ordered ${counter} pizzas, [${new Date()}]`
    }
    counter = 0;
    body.appendChild(p);
})
buttonOrderNow2.addEventListener('click', () => {
    let p = document.createElement('p');
    if(counter == 0){
        window.alert('You must order at least one pizza')
    }else if(counter == 1){
        p.innerText = `You ordered ${counter} pizza, [${new Date()}]`
    }else if(counter > 1){
        p.innerText = `You ordered ${counter} pizzas, [${new Date()}]`
    }
    counter = 0;
    body.appendChild(p);
})

