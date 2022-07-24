var user = [
    {
        name: "rishu",
        email: "r119@gmail.com"
    }, {
        name: "rishu",
        email: "r119@gmail.com"
    }
]
var promise = new Promise(function(resolve, reject) {
    try {
        resolve(user)
    }
    catch (error) {
        reject(error)
    }
});

promise
    .then((res) => displayUsersGrid(res))
    .catch((err) => console.log(err))

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