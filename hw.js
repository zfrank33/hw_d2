/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

// let person3 = {
//     pizza:["Deep Dish","South Side Thin Crust"],
//     tacos:"Anything not from Taco bell",
//     burgers:"Portillos Burgers",
//     ice_cream:["Chocolate","Vanilla","Oreo"],
//     shakes:[{
//         oberwise:"Chocolate",
//         dunkin:"Vanilla",
//         culvers:"All of them",
//         mcDonalds:"Sham-rock-shake",
//         cupids_candies:"Chocolate Malt"
//     }]
// }
let obj = { first: "John", last: "Doe" };

for (const key of Object.keys(obj)) {
    console.log(key, obj[key]);
}
