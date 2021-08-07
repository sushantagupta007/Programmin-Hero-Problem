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