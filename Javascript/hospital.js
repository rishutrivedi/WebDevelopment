var hform = document.getElementById("hform");
hform.addEventListener("submit",function(e){
    e.preventDefault();
    var fname=document.getElementById("fname").value ;
    var lname=document.getElementById("lname").value ;
    var Email=document.getElementById("email").value ;
    var phone=document.getElementById("phone").value ;
    var DOB=document.getElementById("dbirth").value ;
    var DOA=document.getElementById("doa").value ;
    var TOA=document.getElementById("toa").value ;
    var surgery=hform.elements["surgery"].value;
    var visit=hform.elements["visit"].value;
    var feeling=hform.elements["experience"].value;

    // console.log(fname);
    // console.log(lname);
    // console.log(Email);
    // console.log(phone);
    // console.log(DOB);
    // console.log(DOA);
    // console.log(TOA);
    // console.log(surgery);
    // console.log(visit);
    // console.log(feeling);
    var Detail ={
        fname,lname,Email,phone,DOB,DOA,TOA,surgery,visit,feeling
    }
    console.log(JSON.stringify(Detail));
})