var api = "https://jsonplaceholder.typicode.com/todos";
fetch(api).then(res=>res.json())
.then(data=>displayposts(data))
.catch(err=>console.log(err))

function displayposts(posts){
    let userE1 = document.getElementById("users");
    var output="";
    for(post of posts){
        output += `<div>
            <div>${post.title}</div>
            <p>${post.completed}</p>
            </div>
            `}
            userE1.innerHTML = output;
    }
