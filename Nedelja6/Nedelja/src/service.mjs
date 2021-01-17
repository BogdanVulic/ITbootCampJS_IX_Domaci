import product from './product.mjs';
import users from './users.mjs';

const body = document.querySelector('#body');
const formLogIn = document.querySelector('#forma');
const inputUsername = document.querySelector('#username');
const inputPassword = document.querySelector('#password');
const vasaKorpa = document.querySelector('#vasa-korpa');
const korpa = document.querySelector('.korpa');

    const form = document.createElement('form');
    const inputSelProductType = document.createElement('select');
    const selFood = document.createElement('option')
    const selWhiteGoods = document.createElement('option');
    const inputName = document.createElement('input');
    const inputPrice = document.createElement('input');
    const inputQuantity = document.createElement('input');
    const inputExpDate = document.createElement('input');
    const inputWarranty = document.createElement('input');
    const btnSubmit = document.createElement('input');
    const labelForPrice = document.createElement('span');
    const labelForQuantity = document.createElement('span');

    inputName.type = 'text';
    inputPrice.type = 'number';
    inputQuantity.type = 'number';
    inputExpDate.type = 'text';
    inputWarranty.type = 'text';
    btnSubmit.type = 'submit';
    labelForQuantity.textContent = 'text';
    
    labelForPrice.textContent = 'cena:';
    labelForQuantity.textContent = 'dostupna kolicina:'
    selFood.value = 'hrana';
    selFood.textContent = 'Hrana';
    selWhiteGoods.value = 'Bela tehnika';
    selWhiteGoods.textContent = 'Bela tehnika';
    inputExpDate.placeholder = 'Rok trajanja za hranu';
    inputWarranty.placeholder = 'Garancija za belu tehniku';
    inputName.placeholder = 'naziv proizvoda...';

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        inputSelProductType.value == 'hrana' ?
        product.Product.availableProducts.push(new product.Food(inputName.value, inputPrice.value, Number(inputQuantity.value), inputExpDate.value)) :
        product.Product.availableProducts.push(new product.WhiteGoods(inputName.value, inputPrice.value, Number(inputQuantity.value), inputWarranty.value))
        addProductsToDOM();
        inputName.value = ''; inputPrice.value = ''; inputQuantity.value = ''; inputExpDate.valuee = ''; inputWarranty.value = '';
        
    })
    inputSelProductType.append(selFood,selWhiteGoods);
    form.append(inputSelProductType,inputName,labelForPrice,inputPrice, labelForQuantity, inputQuantity, inputExpDate, inputWarranty, btnSubmit);
    body.insertBefore(form,vasaKorpa);

form.style.display = 'none';

let currentUser;
formLogIn.addEventListener('submit', (event) => {
    event.preventDefault();
    users.listOfUsers.forEach(user => {
        if(user.username == inputUsername.value && user.password == inputPassword.value)
        currentUser = user;
    })
    console.log(currentUser);
    if(currentUser == undefined) window.alert('Uneti podaci neispravni');
    else if(currentUser instanceof users.Admin) form.style.display = 'inline';
        else form.style.display = 'none';
    inputUsername.value = ''; inputPassword.value = '';
    vasaKorpa.textContent = `Vaša korpa: ${currentUser.username}`;
    korpa.innerHTML = '';
})



const addProductsToDOM = () => {
    
    const divProducts = document.querySelector('.proizvodi');
    divProducts.innerHTML = '';

    product.Product.availableProducts.forEach(pro => {

        const divProduct = document.createElement('div');
        const inputNumber = document.createElement('input');
        const buttonAdd = document.createElement('button');
        const pExpDateOrWarranty = document.createElement('p');

        buttonAdd.textContent = 'Dodaj u korpu';
        inputNumber.type = 'number';
        inputNumber.id = 'kolicina';
        divProduct.className = 'proizvod';

        divProduct.innerHTML = `
                <p>Naziv: ${pro.name}</p>
                <p>Cena: ${pro.price} din</p>`;
        pExpDateOrWarranty.textContent = `${pro instanceof product.Food ?
                "Rok trajanja: ".concat(pro.expirationDate) :
                "Garancija: ".concat(pro.warranty).concat(" god.")}`;
        
        buttonAdd.addEventListener('click', () => {
            let productForBucket;
            if(inputNumber.value == ""){
                window.alert('unesite kolicinu');
                inputNumber.value = '';
            }
            else if(inputNumber.value > pro.quantity){
                window.alert(`na lageru dostupno samo ${pro.quantity}`);
                inputNumber.value = '';
                }else{
                    if(pro instanceof product.Food){
                        productForBucket = new product.Food(pro.name, pro.price, Number(inputNumber.value), pro.expirationDate);
                        pro.quantity = pro.quantity - inputNumber.value;
                        inputNumber.value = '';
                    }
                    else{
                        productForBucket = new product.WhiteGoods(pro.name, pro.price, Number(inputNumber.value), pro.warranty);
                        pro.quantity = pro.quantity - inputNumber.value;
                        inputNumber.value = '';
                    }
                    currentUser.addToBucket = productForBucket;
                    console.log(currentUser.bucket)
                }
            korpa.innerHTML = '';
            currentUser.bucket.forEach(item => {
                
                const proizvod = document.createElement('div');
                const del = document.createElement('button');
                del.textContent = 'obrisi';
                proizvod.className = 'proizvod';
                proizvod.innerHTML = `
                    <p>Naziv: ${item.name} </p>
                    <p>Cena: ${item.price} din </p>
                    <p>Kolicina: ${item.quantity} </p>`
                del.addEventListener('click', () => {
                    currentUser.bucket.splice(currentUser.bucket.indexOf(item),1)
                    proizvod.remove();
                    pro.quantity += Number(item.quantity)
                })
                proizvod.append(del);
                korpa.append(proizvod);
            })
        });
        divProducts.append(divProduct, pExpDateOrWarranty, inputNumber, buttonAdd);
    });
}
export default{
    formLogIn,
    addProductsToDOM
}