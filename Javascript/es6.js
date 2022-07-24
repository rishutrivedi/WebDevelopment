// var name="Rishu";
// var name = "Trivedi";

// let lang = "java script";
// //let lang = "fnvagjhriu";
// const data = "english";
// const menu = ["home","about"]
// menu.push("services")

//menu = {}

//---------------------------------------------------------------------------

// let welcome = ()=>{
//     console.log("welcome to arrow function");
// }

//let welcome = ()=> "welcome to arrow function"

// let sum = (a,b) => a+b;

// let greet = (name) => `welcome to ${name}`;

//welcome()

//rest opretor
// var num=[89,12,4,5,56,7,8,51]
// function sum(...data){
//     var total=0;
//     for(price of data){
//         total+=price;
//     }
//     return total;
// }

// //spread operator
// Math.max(...num)

//destructuring

//var nums = [12,45,38,923,98]
//let [a,b] = nums;
//let [a,...b] = nums;

var person = {
    name : "rishu",
    email : "rishu10@gmail.com"
}

// var {name,email} = person
// console.log(name);
// console.log(email);

var {name:fname,email} = person
console.log(fname);
console.log(email);


