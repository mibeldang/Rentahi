const express = require('express')
const app = express()
const port = 3436
const bodyParser= require('body-parser')

//
// Requirement for set up the exercise
//
app.use(bodyParser.json()); // parse requests of content-type - application/json

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
     next();
});

let item = [
    { id:0, 
      username:'User 1',
      image:'../assets/shovel.jpg',
      title:'Shovel',
      category:'Sample',
      brand:'Sample Brand',
      price: 200,
      description:'Sample Description'
    },
    { id:1, 
      username:'User 2', 
      image:'../assets/curler.jpg',
      title:'Hair Curler',
      category:'Sample',
      brand:'Sample Brand',
      price: 200,
      description:'Sample Description'
    },
    { id:2, 
      username:'User 3', 
      image:'../assets/tent.jpg',
      title:'Tent',
      category:'Sample',
      brand:'Sample Brand',
      price: 200,
      description:'Sample Description'
    },
    { id:3, 
      username:'User 1', 
      image:'../assets/tent.jpg',
      title:'Tent',
      category:'Sample',
      brand:'Sample Brand',
      price: 200,
      description:'Sample Description'
    },
    
]
app.get('/', (req, res) => {
      res.json(item)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


