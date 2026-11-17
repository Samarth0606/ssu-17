

// let arr = [10,20,30,40,50]

// let obj = {
//     x: 10, //p
//     y: true, //p
//     fn: function(){ //m
//         console.log("sam");
//     }
// }

// length - property
// forEach() - methods
// map() - methods
// filter() - methods
// some() - methods
// every() - methods



//length //property
// console.log( arr.length ); // p

//foreach => method
// HOF, Accepts cb fn => 2 args (item,index)
// it doesnot return anything

// let ret = arr.forEach( function(item,index){
//     console.log(index , item);
// } )

// console.log(ret);


//map => method
// HOF, Accepts cb fn => 2 args (item,index)
// it returns a new array with same number of elements in the original array.

// let arr = [10,20,30,40,50]
// let ret = arr.map( function(item,index){
//     return item*item
// } )

// console.log(arr);
// console.log(ret);



let arr = [10,20,30,40,50,60,70,80]

//filter => method
// HOF, Accepts cb fn => 2 args (item,index)
// it returns a new array with length of array is not fixed & it only returns truthy values

// let retVal = arr.filter(  function(item,index){
//     if(item%20 === 0){
//         return true
//     }else{
//         return false
//     }
// } )

// console.log(arr);
// console.log(retVal);


// some() => method 
// HOF, Accepts cb fn => 2 args (item,index)
// boolean 

let ret = arr.some( function(item,index){
    if(item % 20 == 0){
        console.log("mai chala");
        return true
    }else{
        return false
    }
} )
console.log(ret);

// every() => methods
// HOF, Accepts cb fn => 2 args (item,index)
//boolean

let retVal = arr.every( function(item,index){
if(item % 20 == 0){
        console.log("mai chala");
        return true
    }else{
        return false
    }
} )
console.log(retVal);

