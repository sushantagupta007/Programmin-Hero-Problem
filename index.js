const phones  = [
   {name:"Samsung", price:400,camera:10,storage:32, quantity:5}, 
   {name:"walton32",price:400,camera:8,storage:32, quantity:5}, 
   {name:"Shaomi32",price:400,camera:7,storage:32, quantity:5}, 
   {name:"Shaomi32",price:400,camera:7,storage:32, quantity:5}, 
   {name:"Shaomi32",price:400,camera:7,storage:32, quantity:5}, 
   {name:"Shaomi32",price:400,camera:7,storage:32, quantity:5}, 

]
//NOrmal Loop
/* function totalPriceForLoop (arrays){
        let totalCost = 0;
    for(let x=0; x<arrays.length;x++){
        let mobilePrice = arrays[x].price;
        totalCost+=mobilePrice;
    }
    console.log(totalCost);
}
totalPriceForLoop(phones); */

//For of loop

function totalPriceForOfLoop (arrays){
    let total =0 ;
    for(const element of arrays){
        let quantity = element.quantity;
        let mobileName = element.name;
        let mobilePrice = element.price;
        let totalPrice = quantity*mobilePrice;
        console.log(mobileName, ":", mobilePrice, "bought", quantity);
        total +=totalPrice;
    }
    console.log("Total Price",total);
}

totalPriceForOfLoop(phones)