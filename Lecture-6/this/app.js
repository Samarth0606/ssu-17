


// depends on how it is called.

// 1. direct calling

// function sam(){
//     console.log(this);
// }

// sam(); // direct calling -> 'window' object


// 2. object calling

// let obj = {
//     x: 10,
//     fn: function(){
//         console.log(this);
//     }
// }

// obj.fn(); // object calling
// this points to the object inside which the method is available

// ----------------------


// let abc = {
//     a: 10,
//     fn: function(){
//         console.log(this , "1"); // abc
//         let ans = {
//             y: 30,
//             funn: function(){
//                 console.log(this , "2"); // ans object
//             }
//         }
//         ans.funn() //object calling
//     }
// }
// abc.fn() // object calling

// ----------------------


// let abc = {
//     a: 10,
//     fn: function(){
//         console.log(this , "1");  // window
//         let ans = {
//             y: 30,
//             funn: function(){
//                 console.log(this , "2");      // ans       
//             }
//         }
//         ans.funn() // object
//     }
// }

// let sam = abc.fn
// sam(); // direct

// ----------------------


// let abc = {
//     a: 10,
//     fn: function(){
//         console.log(this , "1");  // abc
//         let ans = {
//             y: 30,
//             funn: function(){
//                 console.log(this , "2");      // window   
//             }
//         }
//         let vohra = ans.funn
//         vohra();
//     }
// }

// abc.fn()

// ----------------------

// 3. constructor calling


// function Sam(umar){
//     this.age = umar;
// }

// let o1 = new Sam(100)
// let o2 = new Sam(30)


// ----------------------

// 4. indirect calling -> to change the ref of this keyword. // call , apply , bind

let obj1 = {
    a: 10, 
    fn: function(x , y){
        console.log(this.a , x , y); // 10
    }
}
let obj2 = {
    a: 50
}


// obj1.fn(); // 10
obj1.fn.call(obj2, 100,200)   // 50
obj1.fn.apply(obj2, [100,200])   // 50
let newfN =obj1.fn.bind(obj2, 100,200)   //  execute nhi krta, copy create krta hai
newfN();

// ----------------------

// 5. arrow fn calling

// this -> parent k this keyword ko adapt krta hai

// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this); // obj | window
//         let arr = ()=>{
//             console.log(this , "2"); //obj | window
//         }
//         arr();
//     }
// }

// let samm = obj.fn
// samm();



// let obj = {
//     a: 10,
//     fn: ()=>{
//         console.log(this); // window
//         let arr = ()=>{
//             console.log(this , "2"); //window
//         }
//         arr();
//     }
// }

// let samm = obj.fn
// samm();


// function sum(x,y){
//     return x+y
// }

// const sum = (x,y)=>{
//     return x+y
// }

// console.log( sum(10,20) );

// ----------------------

//1st way
// const sqaure = (n)=>{
//     return n*n
// }

// console.log( sqaure(6) );


//2nd way
// const sqaure = (n)=> n*n

// console.log( sqaure(6) );


// 3rd way

// const sqaure = n => n*n

// console.log( sqaure(6) );







