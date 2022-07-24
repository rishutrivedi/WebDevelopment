var url= "data.json";

fetch(url).then(res=>res.json())
.then(data => displayUsersGrid(data))
.catch((err)=>console.log(err))

function displayUsersGrid(users) {
    //dom operation
    let userE1 = document.getElementById("users");
    let output = "";
    for (user of users) {
        output += `<div>
            <div>${user.name}</div>
            <div>${user.email}</div>
            </div>
            `}
    userE1.innerHTML = output;
}