/*//Declare the function 
function fun(){
    console.log("this is a function");
}
// call the function
fun()*/


/*function fun(){
    return  "this is a function";
}
console.log(fun());*/

// passing parameter to the function

/*function sum(a,b){
    var c= a+b;
    return c;
}
console.log(sum(10,20));
 console.log(sum(10,20,30));//passing additional arg will be ignored
 console.log(sum(10));//returns NAN
*/

//  calling function without "()"
//  sum
//  f sum(a,b){
//     var c= a+b;
//     return c;
//  }

//bultin arguments array inside the function
/*function getCartTotal(){
    var total=0;
    for(price in arguments){
        total += price
    }
    return total;
}*/

//hoisting
/*welcome()
function welcome(){
    console.log("welcome function");
}*/

//declare function in literal way
/*var greet= function(){
    console.log("welcome function");
}
greet()
*/

/*(function(name){
    console.log(name,"self invoking function");
})("rishu")
*/

/*function welcome(){
    return "welcome";
    console.log("this is the next line ");
}
welcome()
*/