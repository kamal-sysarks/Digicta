

module.exports = (app, options) => {
    app.post('/registerPatient', async (req, res, next) => {
        
        await options.patientRegister(req.body)
        .then(result => {
          console.log("Inside patient:" + result);
          res.status(200).send(result);
        }).catch(err => {
          res.send(err);
        }).catch(next);
    })

    app.post('/loginPatient', async (req, res, next) => {
        await options.patientLogin(req.body)
        .then(result => {
          if(!result){
            return res.status(404).send("User doesn't exists");
          }
          res.status(200).send(result);
        }).catch(err => {
          res.status(500).send(err);
        }).catch(next);
    })
  
    app.get('/patientByID', async (req, res, next) => {
     await options.patientByID()
        .then(result => {
          console.log("patient" + result);
          res.status(200).send(result);
        }).catch(err => {
          res.send(err);
        }).catch(next)
    })
  }