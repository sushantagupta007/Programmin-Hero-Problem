/* // Higher to lower order
/* 
function factorialN(x){
    let multiplication= 1;
    if(multiplication=0){
        return 0;
    }
    for(i=x;i>0;i--){
        multiplication=multiplication*i;
    }
    return multiplication;
}

let factorialNumber= factorialN(4);
console.log(factorialNumber); 


//In for loop/while, the second criteria is a condition. It means there should somethin
//like greater than and less than. For a detrimental loop, it should be >0. 


// Recursive Factoriall

// function recurseFactorial(x){
//     let multiplication;
//     multiplication= x*recurseFactorial(x-1); 
//     console.log(multiplication);
    
// }

// recurseFactorial(3);

// let myArray = [1,2,3,4,5,6];
// let isElementExist= myArray.indexOf(4);

// console.log(isElementExist);
const selected= [];
for(let i=1; i<5;i++){
    const random = Math.random()*100;
    const picked = Math.round(random);
    if(selected.indexOf(picked)==-1){
        selected.push(picked);
    }
    else{
        console.log(picked,selected);
    }
}
console.log(selected); */

let x = [1,2,3,4,5];
let total =1;
for(i=0;i<x.length;i++){
    total+=x[i];
    console.log(x[i]);
}
console.log(total);

console.log(Math.max(1,2,3,32));

console.log(Math.floor(12.96));
console.log(Math.ceil(12.46));
console.log(Math.round(12.46));



