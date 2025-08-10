// const math = require("./math")
// console.log(math.add(2,3) ,math.sub(4,5));
// // console.log("hello this is first fiel of the node");

const http = require("http");
const fs = require("fs");
const url = require ("url");
const users = require("./MOCK_DATA.json")

const express = require("express");
const { execPath } = require("process");
const PORT = 8000;

const app = express();

app.use(express.urlencoded({extended:false}));

app.get("/", (req,res) =>{
  return res.send("hello from home page");
});

app.get("/api/users" , (req,res)=>{
  
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json(user);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  // console.log(body);

  users.push({...body,id: users.length +1});
  fs.writeFile("./Mock_DATA.json",JSON.stringify(users),(err,data)=>{
    return  res.json({status: 'success' , id: users.length });
  });

});


app.patch("/api/users/:id", (req, res) => {

  const id = Number(req.params.id);

  const body = req.body;
  const userIndex = users.findIndex(user => user.id == id);

  users[userIndex] = {...users[userIndex] , ...body};

  fs.writeFile("./Mock_DATA.json",JSON.stringify(users),(err,data)=>{
    return  res.json({status: 'successfully updated' , id});
  });

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


