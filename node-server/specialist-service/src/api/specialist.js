const auth = require('../models/auth');
module.exports = (app, options) => {
    app.post('/registerSpecialist', async (req, res) => {
      await options.specialistRegister(req.body)
        .then(result => {
          res.status(200).send(result);
        }).catch(err => {
          res.send(err);
        });
    })

    app.post('/loginSpecialist', async (req, res, next) => {
      await options.specialistLogin(req.body)
        .then(result => {
          if(!result){
            return res.status(404).send("User doesn't exists");
          }
          res.status(200).send(result);
        }).catch(err => {
          res.status(500).send(err);
        }).catch(next);
    })
  
    app.get('/getAllSpecialist', auth, async (req, res) => {
      await options.allSpecialist()
        .then(result => {
          res.status(200).send(result);
        }).catch(err => {
          res.send(err);
        })
    })
  }