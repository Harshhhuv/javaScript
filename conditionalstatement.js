let mode="dark";
let color;
if(mode==="dark"){
    color="black"
}
else{
    color="white";

}
console.log(color);
// ternary opertaor
let age =25;

let result = age>18? "adult":"not adult"

console.log(result);




let day = 3; // Let's assume 1 = Monday, 2 = Tuesday, and so on...

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
