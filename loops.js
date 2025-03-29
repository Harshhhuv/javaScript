// for ,while,do while,for of,for in loop



let sum=0;
for(let i=0;i<=5;i++)
{
    sum=sum+i;
}
console.log("sum=",sum);
for(let i=1;i<=5;i++){
    console.log("harsh")
}

//while condition check before
//let i=6;
let i=1;
while(i<=5){
    console.log("i=",i)
    i++;
}

//do while
let j=20;
 do{
    console.log("yadav");
    j++;
 }
 while(j<=10)
// help to iteration some data string and array
    //for-of-loop
    let str="tmu"
    //let size=0;
    for(let i of str)
    {
        console.log("i=",i);
    }



    // for of in loop use for obejec 
    let student={
        name : "harsh yadav",
        age:25,
        cgpa:6.7,
    
    };
    for(let i in student)
    {
        console.log("i=",i)
    }