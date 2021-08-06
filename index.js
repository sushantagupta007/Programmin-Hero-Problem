// Sum of All Numers in an Array

let myArray = [1,2,3,4,5,5,6,7,9,10,1.5,-1.5]

function sumArray (numbers){
    let total= 0;
    for(let x=0; x<numbers.length;x++){
        total+=numbers[x];
    }
    console.log(total);
}

sumArray(myArray);