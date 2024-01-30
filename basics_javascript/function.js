

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