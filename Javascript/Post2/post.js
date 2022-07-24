let form=document.getElementById("post")
var api="https://jsonplaceholder.typicode.com/posts"

form.addEventListener("submit",async function(e){
    e.preventDefault();
    var userid=form.elements["uid"].value;
    var title= form.elements["title"].value;
    var body= form.elements["body"].value;

    let formData= {
        userid,title, body
    }
    const responce = await fetch(api,{
        method:"POST",
        header:{
            'content-Type':"application/json"
        },
        body:JSON.stringify(formData)
    })
    console.log(responce)
})