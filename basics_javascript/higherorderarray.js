//if 

const isUser=13;
if(isUser<12)
{
  console.log("yes");
}

else if(isUser>=12)
{
  console.log("its 12");
}
else{
  console.log("NO");
}


// array 

let arr =[1,2,3,4,5]

// for(const num of arr)
// {
//   console.log(num);
// }

// const greet ="hello world!"

// for(const gret of greet)
// {
//   console.log(`foeeach ${gret}`);
// }

const amp = new Map()//unique value

amp.set('in','india' )
amp.set('us','united state' )
amp.set('in','india' )

// console.log(amp);

for(const [key,value] of amp )
{
  console.log(key, ':-', value);
}

const myobject={
  js:'javascript',
  cpp:'c++',
  rb:'ruby'
}

//forin loop  and forof loop


for (const key in myobject) {
  console.log(myobject[key]);
  
}

//foreach

const conding = ["js","ruby", "fvbkj","kfjnd","fkdjn"];

conding.forEach( 
  function (item)
  {
    console.log(item);
  })

conding.forEach( (item ,index,arr)=>{
  console.log(item, index+1, arr);
})