var api = "http://jsonplaceholder.typicode.com/posts";
fetch(api).then(res=>res.json())
.then(data=>displayposts(data))
.catch(err=>console.log(err))

function displayposts(posts){
    let userE1 = document.getElementById("users");
    var output="";
    for(post of posts){
        output += `<div class="use">
            <div>${post.title}</div>
            <p>${post.title}</p>
            </div>
            `}
            userE1.innerHTML = output;
    }
