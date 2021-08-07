/* একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। 
সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম
 রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।  */

/* Inside function a for loop produce a output and we can use this output to another for loop*/

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


/* ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর 
একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য এর চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা 
array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা 
পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।  */

/* ব্রেক দিলে লুপ্ বন্ধ করে দেয়, যে কন্ডিশনে লুপটি বন্ধ করতে বলা হয়েছে।  কিন্তু , ব্রেক এর আগে লুপ থেকে যা পায় 
তা রেখে দেয় এবং তা ডিস্প্লে করা যায় অথবা কোন এরেতে এড করা যায়। নীচের সমস্যার মতো।  */

let numbersArray = [1,2,-3,45,5,4,-5,34,4,344,34,5,34434,344, -3,45,34];
let newArray= [];
for(const number of numbersArray){
    if(number<0){
       break;
    }
    newArray.push(number);
}

console.log(newArray);