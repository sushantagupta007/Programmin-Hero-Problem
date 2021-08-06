// let createdArray = oddArrray();
//Maximum Number
let createdArray = [1,3,5,3535,6634,46563,23232,465656555,43434,656528,438.083,3882937,109997883,2656,73838388383838,980895];
function maxNumber(numbers){
    let largest = numbers[0]; 
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>largest){
            largest = numbers[i];
        }
    }
    return largest;
}

let maximumNumber = maxNumber(createdArray);
console.log(maximumNumber);

//Smalles Number
function smallestNumber(numbers){
    let smallest= numbers[0];
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]<smallest){
            smallest = numbers[i];
        }
    }
    console.log(smallest);
}

smallestNumber(createdArray);


let negativeArray = [-1,-4,-3,-0.3, -99];

//Negative Smallest Number
function negativeMaxValue (numbers){
    let largest = numbers[0];
    for(x=1;x<numbers.length;x++){
        if(numbers[x]>largest){
            largest = numbers[x];
        }
    }
    console.log(largest);
    
}


negativeMaxValue(negativeArray);

//Negatvie Largets Number
function negativeMinValue (numbers){
    let smallest = numbers[0];
    for(x=1;x<numbers.length;x++){
        if(numbers[x]<smallest){
            smallest = numbers[x];
        }
    }
    console.log(smallest);
    
}

negativeMinValue(negativeArray);