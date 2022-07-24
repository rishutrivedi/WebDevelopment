let form=document.getElementById("signup")
var api=""
form.addEventListener("submit",async function(e){
    e.preventDefault();
    var name=form.elements["name"].value;
    var email= form.elements["email"].value;

    let formData= {
        name,email 
    }
    const responce = await fetch(api_url,{
        method:"POST",
        header:{
            'content-Type':"application/json"
        },
        body:JSON.stringify(formData)
    })
    console.log(responce)
})