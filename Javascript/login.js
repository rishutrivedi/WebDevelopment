var loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit",function(e){
    e.preventDefault();
    //  var uservalue=document.getElementById("username").value ;
    //  console.log(uservalue);
    // var uservalue=document.getElementById("username");
    // console.log(uservalue.value);
    // console.log(loginForm.elements['username'].value);

     var username = loginForm.elements['username'].value;
    // if(username.length < 6){
    //     console.log("username must be greter than 6");
    //     return null;
    // }
    var password = loginForm.elements['password'].value;

    // var loginData={
    //     uname: username,
    //     password: password
    // }

    var loginData={
        username,
        password
    }
    console.log(JSON.stringify(loginData));
})