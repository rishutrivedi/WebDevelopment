class Product{
    constructor(name,brand){
        this.name=name;
        this.brand=brand;
    }
    getName(){
        return this.name;
    }
    getBrand(){
        return this.brand;
    }
    getProductDetails(){
        return  `the brand is ${this.brand} name is ${this.name} `
    }
}
class Electronics extends Product{
    constructor(name,brand,ram){
        super(name,brand)
        this.ram = ram;
    }
    getProductDetails(){
        super.getProductDetails;
        return  `the ram is ${this.ram}`
    }
}
let ele = new Electronics("mobile","lenevo","16gb")
console.log(ele.brand)
console.log(ele.getProductDetails())