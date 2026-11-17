

// function sam(){

// }

// console.log( sam() );

// -------------------------------

// function sam(){

// }

// // console.log(  sam() );
// console.log( new sam() );

// -------------------------------


function Sam( age , color ){
    this.umar = age; //p
    this.favRang = color; //p
    // this.greet = function(){ //method
    //     console.log("Hello ji");
    // }
}

Sam.prototype.greet = function(){ 
        console.log("Hello ji");
    }

let p1 =  new Sam(100 , "blue");
let p2 =  new Sam(40 , "black");
let p3 =  new Sam(20 , "pink");
console.log(p1);
console.log(p2);
console.log(p3);


