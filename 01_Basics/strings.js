const name = "navneet"
const repoCnt = 40

// console.log(name + " you have " + repoCnt + " repos");   //Not a good practice in industry

console.log(`Hello my name is ${name}`);

//other way od declaring a string
const str = String('HeyNavneet-user-main');


console.log(str[0]);             //H
console.log(str.__proto__);      //{}
console.log(str.length);         //3
console.log(str.toUpperCase());  //HEY  ----  Here, the original value doesn't change because change is carried out on a copy
console.log(str.charAt(1));      //Gives character at certain position
console.log(str.indexOf('e'));   //Gives index of a particular character


const newStr = str.substring(0,2);  //Here, 0 is inclusive whereas 2 isn't
console.log(newStr);


const newStr2 = str.slice(2, 5);  //Here, 2 is inclusive whereas 5 isn't
console.log(newStr2);

const newStr3 = "     heya   ";
console.log(newStr3);
console.log(newStr3.trim());   // trims all the whitespaces


const url = "https://nanveet.com/user%20dashboard";
console.log(url.replace('%20', '-'));
console.log(url.includes('com'));       //boolean

console.log(str.split('-'));        //returns an array of strings after split based on '-'
