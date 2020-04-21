module.exports = (app, options) => {
    app.post('/registerPatient', (req, res, next) => {
        return options.patientRegister(req.body)
        .then(result => {
          console.log("Inside patient:" + result);
          res.status(200).send(result);
        }).catch(err => {
          res.send(err);
        }).catch(next);
    })

    app.post('/loginPatient', (req, res, next) => {
        return options.patientLogin(req.body)
        .then(result => {
          // console.log("Login Successful");
          res.status(200).send("Login Successful");
        }).catch(err => {
          res.send(err);
        }).catch(next);
    })
  
    app.get('/patientByID', (req, res, next) => {
   //   res.send("Hello World");
     return options.patientByID()
        .then(result => {
          console.log("patient" + result);
          res.status(200).send(result);
        }).catch(err => {
          res.send(err);
        }).catch(next)
    })
  }