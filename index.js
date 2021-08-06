// Higher to lower order

function factorialN(x){
    let multiplication= 1;
    for(i=x;i>0;i--){
        multiplication=multiplication*i;
    }
    return multiplication;
}

let factorialNumber= factorialN(4);
console.log(factorialNumber);


//In for loop/while, the second criteria is a condition. It means there should somethin
//like greater than and less than. For a detrimental loop, it should be >0. 
