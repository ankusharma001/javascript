const my_Arr= [0,2,4,,4,2,"kjfgn"]

//to the element in array
 my_Arr.push (45)
 my_Arr.push (45)

 //to pop the element
 my_Arr.pop()

 my_Arr.unshift(0)



console.log(my_Arr.indexOf(3));
console.log(my_Arr.includes(3));

console.log(my_Arr);




const Hero=["fjksdjf","fjknsdf"]
const dc =["kjfnn","hbfjn"]

// Hero.push(dc)
// const al=Hero.concat(dc)


const all_New =[...Hero,...dc]


console.log(all_New);


const CON=[1,2,1,[1,2,5],1,52,4,[4,5,5]]

const NEW=CON.flat();
console.log(NEW);


