//object in javascript 

//obhect letrals

const sym =Symbol("this is the key")

const jsuser ={
  name :"anand babu",
  "nameo": "anand BABU",
  [sym] : "this is the key",
  age : 47,
  location: "jaipur",
  email : "anandbabu@gmail.com",
  isLoggedIn:false,
  lastLogInDays:["Monday","Saturday"]

}

console.log(jsuser.name);
console.log(jsuser["name"]);
console.log(jsuser["nameo"]);

console.log(jsuser[sym]);

//now i cannot change the value in teh object 
// Object.freeze(jsuser)

jsuser.email="anadbabunahi@gmail.com"

// console.log(jsuser);
jsuser.greeting = function(){
  console.log("hello js user");
}

jsuser.greetingtwo = function(){
  console.log(`hello js user, ${this.name}`);
}

console.log(jsuser.greeting);
console.log(jsuser.greeting());

console.log(jsuser.greetingtwo());

//singleton object
// const insta = new Object();
// console.log(insta);

//non-singleton object 
const instagrm ={
  name:{
    place :{
      name :"bhupinder jogi",
      age : null,
      email :"bhupinder@gmail.com"
    }
  }


}
// console.log(instagrm.name.place.name);

//merge object

const obj3=Object.assign({},jsuser,instagrm.name.place) // all value stored in {}
console.log(obj3);

const obj4 = {...jsuser,...instagrm.name.place}

// console.log(obj4);

const arr =[
  {
    email :"dnnjvn"
  },
  {
    name:"dkfjnkfjn",
    email:"skbjk"
  }
]
// console.log(arr[1].email);//access obj from array

//show obj value in the form of array
console.log(Object.keys(jsuser));
console.log(Object.values(jsuser));
console.log(Object.entries(jsuser));


//check if obj has property or not 
console.log(instagrm.hasOwnProperty('name'));


