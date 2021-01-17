import product from './product.mjs';


class User{
    #username;
    #password;
    #bucket = [];
    constructor(username,password){
        this.#username = username;
        this.#password = password;
    }
    set addToBucket(product){
        let notContains = true;
        this.bucket.forEach(item => {
            if(item.name == product.name){
                item.quantity += product.quantity;
                notContains = false;
            }
        })
        if(notContains)
        this.#bucket.push(product);
    }
    get username(){
        return this.#username;
    }
    get password(){
        return this.#password;
    }
    get bucket(){
        return this.#bucket;
    }
}
class Admin extends User{
    constructor(username, password){
        super(username, password);
    }
    addNewProduct(){
        product.Product.availableProducts.push(product)
    }
}
let listOfUsers = [
    new User('pera','123'),new User('zika','123'),new Admin('mika','123')
]
console.log(listOfUsers)

export default {
    listOfUsers,
    User,
    Admin
}