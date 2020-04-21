const express = require('express')
const api = require('../api/patient')

const start = (options) => {
    return new Promise((resolve, reject) => {
      if (!options.repo) {
        reject(new Error('The server must be started with a connected repository'))
      }
      if (!options.port) {
        reject(new Error('The server must be started with an available port'))
      }
  
      const app = express();
      app.use(express.json());
    //   app.use(morgan('dev'))
    //   app.use(helmet())
      app.use((err, req, res, next) => {
        reject(new Error('Something went wrong!, err:' + err))
        res.status(500).send('Something went wrong!')
      })

      
  
      api(app, options.repo);
  
      const server = app.listen(options.port, () => resolve(server))
    })
  }
  
  module.exports = Object.assign({}, {start})

  // const express = require('express');
// require('./db/mongoose');
// const User = require('./models/users');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());

// app.post('/users', (req, res) => {
//     const user = new User(req.body);

//     user.save().then(()=> {
//         res.send(user);
//     }).catch(()=>{

//     });
// });

// app.listen(port, () => {
//     console.log('Server is up and running on port' + port);
// });