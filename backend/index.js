// -- directory structure 
// index  -> DB connects
//App -> config cookies
//Constants -> enums, DB-name
/*
DB
Models
Controllers
Routes
Middleware
Utils
More(depends)
*/
// require('dotenv').config()
// const express = require('express')

import express from 'express'

const app = express()

const userinfo = {
  "login": "ankusharma001",
  "id": 122442958,
  "node_id": "U_kgDOB0xUzg",
  "avatar_url": "https://avatars.githubusercontent.com/u/122442958?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ankusharma001",
  "html_url": "https://github.com/ankusharma001",
  "followers_url": "https://api.github.com/users/ankusharma001/followers",
  "following_url": "https://api.github.com/users/ankusharma001/following{/other_user}",
  "gists_url": "https://api.github.com/users/ankusharma001/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ankusharma001/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ankusharma001/subscriptions",
  "organizations_url": "https://api.github.com/users/ankusharma001/orgs",
  "repos_url": "https://api.github.com/users/ankusharma001/repos",
  "events_url": "https://api.github.com/users/ankusharma001/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ankusharma001/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Ankush Sharma",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 15,
  "public_gists": 0,
  "followers": 2,
  "following": 4,
  "created_at": "2023-01-11T09:52:35Z",
  "updated_at": "2025-04-15T08:26:30Z"
}

const port = process.env.port|| 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('twitter.com')
})

app.get('/login' , (req,res)=>{
  res.send("<h1>its a login page</h1>")
})

app.get ('/github',(req,res)=>{
  res.json(userinfo)
})


app.get ('/api/jokes',(req,res)=>{
  const jokes = [
    {
      id: 1,
      title: "Welcome to My Blog",
      content: "This is the first post on my blog. Stay tuned for more!"
    },
    {
      id: 2,
      title: "JavaScript Tips",
      content: "Always use `const` or `let` instead of `var`."
    },
    {
      id: 3,
      title: "Node.js Rocks",
      content: "Node.js lets you build fast and scalable network apps using JavaScript."
    }
  ]
  res.json(jokes);
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

