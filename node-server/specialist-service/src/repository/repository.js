'use strict'
const User = require("../models/users");

const repository = (db) => {
  
  const specialistRegister = (doctor) => {
    return new Promise((resolve, reject) => {
        try {
          // const user = new User(patient);
          const val = db.collection('specialists').insertOne(doctor);
          resolve(val);
       } catch (e) {
          console.log(e);
          reject(e);
       };
    });
  }

  const specialistLogin = (patient) => {
    return new Promise((resolve, reject) => {
      try{
        db.collection('specialists').findOne({email: patient.email, password: patient.password },(error, result) => {
          if(error) throw error;
          if(!result) reject("User Doesn't Exists");
          console.log(result);
          resolve(result);
        });
      }catch(e){
        console.log(e);
      }

    });
  }

  const allSpecialist = () => {
    return new Promise((resolve, reject) => {
      try{
        db.collection('specialists').find({}).toArray((err, result) => {
          if (err) throw err;
          console.log(result);
          resolve(result);
        });
        
      }catch(err){
        console.log(err);
        reject(err);
      }
     
    })
  }

  const disconnect = () => {
    db.close()
  }

  const obj = Object.create({
    specialistRegister,
    specialistLogin,
    allSpecialist,
    disconnect
  })
 // console.log(obj.patientRegister);
  return obj;
}

const connect = (connection) => {
  return new Promise((resolve, reject) => {
    if (!connection) {
      reject(new Error('connection db not supplied!'))
    }
   // console.log(connection);
    resolve(repository(connection));
    
  })
}

module.exports = Object.assign({}, {connect})
