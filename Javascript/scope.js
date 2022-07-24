// var a=10;//global variables

// function sumTen(){
//     var b=20;//private variables
//     console.log(a+b);
// }
// sumTen()
// loxical 
function parent(){
    var x=10;
    function child(){
        var y=90;
        var total=x+y;
        return total;
    }
    return child()
}
 console.log(parent());