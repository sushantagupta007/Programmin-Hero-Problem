/* function testQuality(age, height){
    if((age>=10 && age<=30) && (height>=50&&height<=110)){
        console.log("Quality Approved");
    }
    else{
        console.log("Quality Not Passed");
    }
}

testQuality(20,60);

let i= 7;
while(i<19){
    if(i%2!=0){
        console.log(i);
    }
    i++;
}

let myArray = [1,2,3,44,5];
console.log(myArray.length);
myArray[3]= 50; 
console.log(myArray);
myArray.push(10,20);
console.log(myArray);
myArray.pop();
console.log(myArray);

for(let i=0; i<myArray.length;i++){
    console.log(myArray[i]);
}

myArray.push(80,90,100);
console.log(myArray);

for (const element of myArray){
    if(element>80){
        console.log(element);
    }
}

function multiplication (x,y,z){
    return x*y*z;
}

let result = multiplication(10,30,300);

console.log(result);


const player = {
    name: "sushanta",
    age :35,
    edu: "MS"
}
player.age= 45;
console.log(player.age)

function feetToInch (feet){
    return feet/12;
}

let inch = feetToInch(12);
console.log(inch);

function centimeterToMeter(cm){
    return cm*0.01;
}
let meter = centimeterToMeter(200);
console.log(meter);

function paperRequirement(firstBookQuantiy, secondBook, thirdBook){
    const firstBookPage= 100;
    const secondBookPage= 200;
    const thirdBookPage= 300;
    const totalPage = firstBookQuantiy*firstBookPage+secondBook*secondBookPage+thirdBook*thirdBookPage;
    return totalPage;
}
let pages = paperRequirement(10,20,30);
console.log(pages); 

const myFriend = ["Gupta", "Sazal","Sagor","Mehedi","Mridul", "Jony", "Amit","Nayem", "JE Besi para dey"];

function bestFriend (friends){
    let baseLength = friends[0].length
    for(let i=0;i<friends.length;i++){
        let nameLength = friends[i].length;
        if(nameLength>baseLength){
            [baseLength]=[nameLength];
            // console.log(baseLength);
        }
    }
    for(const name of friends){
        if(name.length===baseLength){
            return name;
        }
    }
}


let maxF = bestFriend(myFriend);
console.log(maxF);
*/

let numbersArray = [1,2,-3,45,5,4,-5,34,4,344,34,5,34434,344, -3,45,34];
let newArray= [];
for(const number of numbersArray){
    if(number<0){
       break;
    }
    else if(number>0){
        newArray.push(number);
    }
}

console.log(newArray);