// Single line cmt 
// alert("welcome to java script");

// double line cmt 

/*alert("welcome to java script");
alert("welcome to java script");
alert("welcome to java script");
alert("welcome to java script");*/


// premitive data type

/*String "java script"
Number 12000.98/40
Boolean true/false*/

// name ->identifier (all variables names)
// var is keyword to declare any variables 

var name ="java script";
var price =90;

//variable naming conventions
// var 8name="" ;//not correct
// var _name= '';
// var name8 = '';
// var firstName = '';
// var first_Name = '';
// var first Name = '';not correct
// var $name = '';
// var @name = ''; //not correct


var brand ,price, catagory;

// brand:
// undefined

brand="lenevo";
//alert(name);
console.log(name);

// var brands="poco pro";
// var price = 27999;
// var ram=16 GB ;

var firstName= "Rishu";
var secondName = "Trivedi";
//var fullName = firstName + " " +secondName;

//template literals

var fullName = `welcome ${firstName} ${secondName}`;

//complex data types

//Arrays

// var students = ["Rishu",22,null,fullName];
 var students = ["Rishu",{name:"Rishu"},22,null,fullName, [1,2,3,[34,67]]];

 //object
 //function syntax
 /*function fn(){
    var lang = "english";
    console.log(lang);
 }
 fn()*/
 var dog={
    color:"goldenBrown",
    height: "2feet",
    activities: ["play","barks","eats"],
    address:{
        city:"banglore",
        met: function(){},
    },
    runs: function(){
        console.log("Dogruns");
    },
    eats: function(){
        console.log("Dog eat's");
    }
 }

 function cook(param1,param2,param3){
    var result= `by using ${param1} and ${param2} and ${param3} I made recipe`
    return result;
 }
 console.log(cook("rice","chiken","masala"));

 function sum(a,b){
    return a+b;
 }
 console.log(sum(20,30));

 //objectname.propertyname
 console.log(dog.color)




