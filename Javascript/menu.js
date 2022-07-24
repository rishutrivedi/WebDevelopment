var btn=document.getElementById("btn");
var navItems=["home","about","services","faq","contacts"];

function generateMenu(data){
   var navEl=document.getElementById("menu");
  
   var output="<ul>";
  
   for(navItem of data){
      output+=`<li> <a href="${navItem}.html">${navItem}</a></li>`
   }
   output+="</ul>";
   navEl.innerHTML=output;
}
function createMenu(){
   generateMenu(navItems);
}

btn.addEventListener("click", createMenu); 