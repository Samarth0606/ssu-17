
// unordered -> 

// let arr = []
// let obj = {
//     // properties = key : value
//     x: 10,
//     age: 3345,
//     user: "Sam",
//     isMale: true

// }
// console.log(obj);
// console.log(obj.user);
// console.log(obj['user']);

// obj.email = "sam@gmail.com"
// console.log(obj);
// delete obj.age
// console.log(obj);

// --------------------------------------

// for-in

let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 'sam',
    e: true
}

for(let i in obj){
    // console.log(i); //keys
    console.log(i , obj[i]); //keys
}
