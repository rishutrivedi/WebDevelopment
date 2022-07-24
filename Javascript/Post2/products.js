var products = [{
    name: "soap",
    brand: "jonson baby",
    price: "1200",
    category: "baby",
    rating: "4",
    latest: true
},
{
    name: "oil",
    brand: "jasmine",
    price: "500",
    category: "baby",
    rating: "5",
    latest: true
},
{
    name: "daiper",
    brand: "jonson baby",
    price: "2000",
    category: "baby",
    rating: "4",
    latest: true
},
{
    name: "powder",
    brand: "ponds",
    price: "300",
    category: "baby",
    rating: "1",
    latest: true
},
{
    name: "sampoo",
    brand: "dove",
    price: "800",
    category: "baby",
    rating: "3",
    latest: true
}
]

    //products.forEach( (product) => console.log(product));

// const baby = products.filter(product => product.brand==="jonsanbaby"||product.brand==="dove"||product.brand==="jasmine"||product.brand==="ponds") 
// const rupees= products.filter(product => product.price >300 && product.price <800 )
// const bprr= products.filter(product => product.price >= 300 && product.price <=800 && product.brand==="ponds" || product.brand==="dove"&& product.rating<="3" || product.rating>"1" )
//const map= products.map(product => product.price*2)
// const grad= products.map(product => product.rating+2)

//console.log(map)
// console.log(baby)
// console.log(rupees)
// console.log(bprr)

//sort
// const sortedproducts=products.sort((p1,p2)=>( p1.price>p2.price ? 1:-1))
// const sortedrat=products.sort((p1,p2) => ( parseInt (p1.rating)>parseInt (p2.rating) ? 1:-1))

 //const totalspent=products.reduce((total,product) => total+parseInt(product.price),0)

 //console.log(totalspent)
// console.log(sortedrat)

// const final = products
//                 .map(product => product.price-product.price*.1)
//                 .filter(product => product.price>=300)
//                 .sort((a,b)=>b-a)
//                 console.log(final)