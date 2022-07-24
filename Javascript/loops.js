/*while loop 
do while loop
for loop
for  of loop
for in
*/

//while loop
/*var i=0;
while (i<=10){
console.log(i);
i++;
}*/

//do while
/*var i=1;
do{
  console.log("i value is",i);
  i++;
}while(i<=10);*/

// for loop
/*for(var i=0;i<=10;i++){
    console.log("i value is :",i);
}*/
/*console.time("brands");
var brands=["poco","mi","samsung","iphone","lenovo","oneplus"];
 var brandlength=brands.length;
for(var i=0;i<brandlength;i++){
    console.log("brand name is",brands[i]);
}
console.timeEnd("brands");*/

/*var studentname=["rishu","rajini","sachin","shivam","yogesh"];
for(var i=0;i<studentname.length;i++){
 console.log("student information is ",studentname[i]);
}*/

// for of 

/*var brands=["poco","mi","samsung","iphone","lenovo","oneplus"];
for(brand of brands){
    console.log("brand name is",brand);
}*/

// for in
/*var brands=["poco","mi","samsung","iphone","lenovo","oneplus"];
for(brand in brands){
    console.log("brand index is:",brand);
    console.log("brand name is:",brands[brand]);
}*/
/*var person=
{
    name: "rishu",
    age: 22,
    email:"rishutrivedi@gmail.com"
}
for(prop in person){
    console.log(prop,":",person[prop]);
}*/

var students=[
    {
        name: "rishu",
        age: 22,
        email:"rishutrivedi@gmail.com"
    },
    {
        name: "rajini",
        age: 23,
        email:"rajini@gmail.com"
    },
    {
        name: "shivam",
        age: 24,
        email:"shivam@gmail.com"
    },
    {
        name: "sachin",
        age: 25,
        email:"sachin@gmail.com"
    },
    {
        name: "yogesh",
        age: 26,
        email:"yogesh@gmail.com"
    },
    {
        name: "aman",
        age: 27,
        email:"aman@gmail.com"
    }
]
var length=students.length;
var i;
for(student of students){
    for(key in student){
        console.log(key,":",student[key]);
    }
}

