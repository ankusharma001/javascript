// const math = require("./math")
// console.log(math.add(2,3) ,math.sub(4,5));
// // console.log("hello this is first fiel of the node");

const http = require("http");
const fs = require("fs");
const url = require ("url");
const mongoose = require("mongoose");
const users = require("./MOCK_DATA.json")

const express = require("express");
const { execPath } = require("process");
const { type } = require("os");
const { log, timeStamp } = require("console");
const PORT = 8000;

const app = express();

mongoose.connect('mongodb+srv://sharmankush004a:ZUkjZmyRmoVhfMye@cluster001.6pck1da.mongodb.net/')
.then(()=> console.log('Moongo db Connected'))
.catch((err) => {console.log('Mongo ERROR',err);
})
//schema 

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required:  true,
  },
  last_name:{
    type: String,
  },
  email:{
    type: String,
    required:true,
    unique: true,
  },
  gender :{
    type: String,
    required : true,

  },
  job_title:{
    type: String,
  }
},{
    timestamps: true

  });

const User = mongoose.model('user',userSchema);

app.use(express.urlencoded({extended:false}));
app.use((req,res,next )=>{
  console.log("response from middleware 1");

  // return res.end("hey");
  next();
  
})

app.get("/", (req,res) =>{
  return res.send("hello from home page");
});

app.get("/api/users" , async (req,res)=>{
  // res.setHeader("X-Myname", "Ankush Sharma")

  const allDbUsers = await User.find({});
  
  return res.json(allDbUsers);
});

app.get("/api/users/:id",async (req, res) => {
  const id = req.params.id;
  // const user = users.find(user => user.id === id);

    const user  = await User.findById(id);
  
  

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json(user);

  // return res.json(user);
});

app.post("/api/users", async (req, res) => {
  const body = req.body;

  if (!body.first_name || !body.gender || !body.email) {
    return res.status(400).json({ msg: "all fields are required.." });
  }

  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
     email: body.email,
    gender: body.gender,
    job_title: body.job_title
  });

  console.log("result:", result);
  return res.status(201).json({ msg: "successfully added" });
});



app.patch("/api/users/:id", async (req, res) => {

  // await User.findByIdAndUpdate(req.params.id,{last_name :'changed'})

   await User.findByIdAndUpdate(
      req.params.id,
      req.body,           // the data to update
      { new: true, runValidators: true } // return updated doc + validate schema
    );

  // const id = Number(req.params.id);

  // const body = req.body;
  // const userIndex = users.findIndex(user => user.id == id);

  // users[userIndex] = {...users[userIndex] , ...body};

  // fs.writeFile("./Mock_DATA.json",JSON.stringify(users),(err,data)=>{
  //   return  res.json({status: 'successfully updated' , id});
  // });

  return res.json({status: " Success"})

});

app.delete("/api/users/:id", (req, res) => {

    const id = Number(req.params.id);
  
  const body = req.body;
  const userIndex = users.findIndex(user => user.id == id);

   users.splice(userIndex, 1);

fs.writeFile("./Mock_DATA.json",JSON.stringify(users),(err,data)=>{
    return  res.json({status: 'successfully deleted' , id});
  });


});

app.listen(PORT,()=> console.log("Server Started!"));




// const myserver = http.createServer((req,res)=>{
//   const log = `${Date.now()  } :, ${req.url} new request recived\n`;
//   fs.appendFile('log.txt' , log , (err , data) =>{
//     res.end("hello from server again");
//   })
//   console.log("new request receive" );
//   // console.log(req);
//   const  myurl = url.parse(req.url,true);
//   console.log(myurl);
  

//   switch  (myurl.pathname ) {
//     case "/": res.end("hello from server");
//     break;
//     case "/about" : 
//     const username = myurl.query.myname
//     res.end(`hi , ${username}`);
//     break;
//     default:
//       res.end("404 page not found");
//   }
  
// });


// const myserver = http.createServer(app);
// myserver.listen(8000,()=> console.log("server is started!"));


