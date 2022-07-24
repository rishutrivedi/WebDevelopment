var cart =[
    {
        productId:1,
        brand:"MI",
        price:"12000",
        quantity:6
    },
    {
        productId:2,
        brand:"iphone",
        price:"40000",
        quantity:1
    },
    {
        productId:3,
        brand:"Samsung",
        price:"20000",
        quantity:3
    },
    {
        productId:4,
        brand:"oneplus",
        price:"25000",
        quantity:2
    },
    {
        productId:5,
        brand:"oppo",
        price:"15000",
        quantity:5
    }
]
function getCartTotal(products){
var total=0;
var q=0;
for(product of products){
    var c=0;
    q+=product.quantity;
    c=product.price*product.quantity;
    total+=product.price*product.quantity;
    console.log(product.productId,product.brand,product.quantity,c);
}
console.log("total phone quantity",q,"total price",total);
}
getCartTotal(cart)