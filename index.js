// let createdArray = oddArrray();
let createdArray = [1,3,5,3535,6634,46563,23232,465656555,43434,656528,438.083,3882937,109997883,2656,73838388383838,980895];
function maxNumber(numbers){
    let largest = 0; 
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>largest){
            largest = numbers[i];
        }
    }
    return largest;
}

let maximumNumber = maxNumber(createdArray);
console.log(maximumNumber);

function smallestNumber(numbers){
    let smallest= maximumNumber;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]<smallest){
            smallest = numbers[i];
        }
    }
    console.log(smallest);
}

smallestNumber(createdArray);

