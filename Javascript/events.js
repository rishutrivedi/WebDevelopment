/*function welcome(){
    alert("i am a rishu");
}
var btn = document.getElementById("btn");
btn.onclick = welcome;
*/

//event delegation 
//element.addEventListener(eventname,event handler)
// btn.addEventListener("click",welcome);*/
/*function parentHandler(){
    console.log("this is a parent");
}
function childHandler(){
    console.log("this is a child");
}*/
/*function taskOne(e){
    console.log("task one");
    e.preventDefault();
}


// function taskOne(e){
// console.log("task one");
// if(true){
//     e.stopImmediatePropagation();}
function taskTwo(){
    console.log("task Two");
 */


function parentHandler(ev){
    console.log("this is a parent");
    //console.log(ev.target);
    console.log(ev.currentTarget);
}
function childHandler(ev){
    console.log("this is a child");
    //ev.stopPropagation();
}

var p1 = document.getElementById("parent");
var p2 = document.getElementById("parent1");
var c1 = document.getElementById("child");
var c2 = document.getElementById("child1");
 p1.addEventListener("click",parentHandler);
 c1.addEventListener("click",childHandler);
// c1.addEventListener("click",taskOne);
// c1.addEventListener("click",taskTwo);

// // p2.addEventListener("click",parentHandler,true);//true means this is shows top bottom  on click
// // c2.addEventListener("click",childHandler,true);


// var anc = document.getElementById("anc");
// anc.addEventListener("click",taskOne);