//document object
//create div element and store in a variable
var divEl=document.createElement("div");

//add div to body
document.body.appendChild(divEl);

//add text node to div element 
var textEL=document.createTextNode("some text");
divEl.appendChild(textEL);

//add attribute
divEl.setAttribute("id","test");

//get element by id 
 var getById=document.getElementById("test");

 //getById.remove()

 console.log(getById.innerText);
 console.log(getById.innerHTML);

//  getById.innerHTML="new data";

 var name="rishu";
 getById.innerHTML="<p>welcome to "+name+"</p>";