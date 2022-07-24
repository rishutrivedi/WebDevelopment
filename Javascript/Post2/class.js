class Laptop{
    constructor(brand,ram){
        this.brand=brand;
        this.ram=ram;
    }
    // getBrand(){
    //     return this.brand
    // }
   get getBrand(){
        return this.brand
    }
    setBrand(name){
            this.brand=name;
    }
}
let laptop1 = new Laptop("lenevo","16gb")
console.log(laptop1.brand)
 //console.log(laptop1.getBrand())
console.log(laptop1.getBrand)