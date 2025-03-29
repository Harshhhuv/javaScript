function myfunction(){
console.log("harsh")
}
myfunction();
myfunction();


function print(name){
    return name;
}
print(console.log("yadav"));

function sum(x,y){
    console.log(x+y);
}
sum(1,2)

// arrow function


const arrsum=(a,b)=>{
console.log(a+b);

}
arrsum(2,3)

let arrprint=(name)=>{
    console.log(name)
}
arrprint("aditiya");

// immediately
(function() {
    console.log("This function runs immediately!");
})();


//higher order function
function operate(a, b, callback) {
    return callback(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(operate(5, 3, add));      
console.log(operate(5, 3, multiply)); 


let arr=[1,2,3];
 arr.forEach(function printval(val){
 console.log(val);
 
 }
 )



 let arry=[7,8,9];
 arry.forEach((val)=>{
    console.log(val)
 })

 //map 
 let num=[3,4,5];
 let newarr=num.map((val)=>{
    return val*val;
 });
 console.log(newarr);

 //filter
 let arr1=[2,3,6,7,8];
 let newarr1=arr1.filter((val)=>{
    return val%2==0;
 })
console.log(newarr1);
