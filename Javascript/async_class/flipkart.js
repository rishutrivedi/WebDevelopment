var products=[
    {
        brand:"samsung",
        ram:"8gb",
        battery:"4500",
        processor:"snapdragon 865",
        price:"36000"
    },
    {
        brand:"apple",
        ram:"4gb",
        battery:"5000",
        processor:"a15 hexacore",
        price:"72000"
    }
]
 var promice = new promice(function(resolve, reject) {
    try {
        resolve(products)
    }
    catch (error) {
        reject(error)
    }
});
promise
    .then((res) => displayUsersGrid(res))
    .catch((err) => console.log(err))

function displayUsersGrid(products) {
    //dom operation
    let userE1 = document.getElementById("products");
    let output = "";
    for (product of products) {
        output += `<div>${product.brand}${product.ram}${product.battery}${product.processor}${product.price}</div>
             `}
    userE1.innerHTML = output;
}