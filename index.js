/*function fibonaciGenarate(x){
    let lastPrevious = 0;
    let currentPrevious =1;
    let sum; 
    let fiboArray = [];
    for(i=1; i<=x;i++){
        sum=lastPrevious+currentPrevious;
        [currentPrevious, lastPrevious]= [sum,currentPrevious]
        fiboArray.push(sum);
    }
    console.log(fiboArray);
}
*/
// fibonaciGenarate(10);

// 
//
// fibo[2]=10;
// fibo[3]= 12;
// console.log(fibo);
const fibo = [0,1];
for(x=2; x<10;x++){
    fibo[x]= fibo[x-1]+fibo[x-2];
}
console.log(fibo);
