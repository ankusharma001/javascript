

function print(){

  console.log("haha");
  
}

print()
print()
print()

function sum (number , number1 )
{
  // console.log(number+number1);
  return number +number1
}
// sum(2,3)
const value =sum(2,4)

console.log(value);


function userName(username)
{
  if(username===undefined)  
  {
    console.log("please enter user name");
    return
  }
  return `${username} is now ur usernaame`
}

// console.log(userName("bhupinder"));

const user=userName("bhupinder")
console.log(user);


const user_Name={
  username : "ksjdnf",
  kdjn:86464,

  welcomeMessage : function ()
  {
    console.log(`${this.username},welcome to website`);   //current context
console.log(this);

  }

}

const math = require("fs");

user_Name.welcomeMessage()
user_Name.username="ldm"
user_Name.welcomeMessage()

console.log(this);  // global context which is different in browser and different in node js

function one()
{
  userName:"kjn",
  console.log(this.userName);//not work in function
}
one()

// const functions =()=> {
//   let username ="kfjvn"
//   console.log(this);
// }

const functions =(num1 ,num2)=> (num1+num2) //u don't have to write the return ststement in the () and this is called inplicite return 

console.log(functions(2,3));



// Immmidiately INvoke Function Expressions (IIFE)

//for remove global scope pollutiion

(function hello()
{
  console.log(`hello`);
})();

((name)=> {
  console.log(`hello ${name}`);
})("hsjh");



const summer = (a, b)=>
{

  return a+b;
}

 console.log( summer(1,2));

//  🔖 we use foreach method for itration in array 

const arr = [1,2,4,5,6];

arr.forEach(arr=> {
  

  console.log(arr);
});

