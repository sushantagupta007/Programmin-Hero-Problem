let newArray = [1,2,3,3,4,5,5];

let unique = [];

//Direct Function 
function removeDuplicate (names){
for(i=0;i<names.length;i++){
    const element = newArray[i];
    if(unique.indexOf(element)==-1){
        unique.push(element);
    }
}
    return unique;
}

let newUnique = removeDuplicate(newArray);
console.log(newUnique);


//For of loop

let newArray2 = [1,2,3,3,4,5,5,6,6,9,0,9];

function removeDuplicate (names){
    let unique2 = [];
    for (const element of names){
        if(unique2.indexOf(element)==-1){
            unique2.push(element);
        }
    }
        return unique2;
    }
    
    let newUnique2 = removeDuplicate(newArray2);
    console.log(newUnique2);
    