
class Product{
    static availableProducts = []
    #name;
    #price;
    #quantity;
    constructor(name, price, quantity){
        this.#name = name;
        this.#price = price;
        this.#quantity = quantity;
    }
    get name(){
        return this.#name;
    }
    get price(){
        return this.#price;
    }
    get quantity(){
        return this.#quantity;
    }
    set quantity(quantity){
        this.#quantity = quantity;
    }
}
class WhiteGoods extends Product{
    #warranty;
    constructor(name, price, quantity, warranty){
        super(name, price, quantity);
        this.#warranty = warranty;
    }
    get warranty(){
        return this.#warranty;
    }
}
class Food extends Product{
    #expirationDate;
    constructor(name, price, quantity, expirationDate){
        super(name, price, quantity);
        this.#expirationDate = expirationDate;
    }
    get expirationDate(){
        return this.#expirationDate;
    }
}
export default{
    Product,
    WhiteGoods,
    Food
}
