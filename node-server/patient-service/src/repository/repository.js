'use strict'
const Patient = require("../models/users");

const repository = (db) => {
  
  const patientRegister = async (patient) => {
    try {
      const user = new Patient(patient);
      const savedUser =  await user.save();
      return savedUser;
    } catch (error) {
      console.log(error);
      return error;
    }
      
  }

  const patientLogin = async (patient) => {
    
      try{
        const logInPatient = await Patient.findByCredentials(patient.email, patient.password);
        return logInPatient;
      }catch(e){
        console.log(e);
        return e;
      }


  }

  const patientByID = async () => {
    
    try {
      const patients = await Patient.find({});
      return patients;  
    } catch (error) {
      console.log("error:" + error);
      return error;
    }
    
  }

  const disconnect = () => {
    db.close()
  }

  const obj = Object.create({
    patientRegister,
    patientLogin,
    patientByID,
    disconnect
  })
 // console.log(obj.patientRegister);
  return obj;
}

const connect = (connection) => {
  return new Promise((resolve, reject) => {
    if (!connection) {
      reject(new Error('Database Not Connected'));
    }
   // console.log(connection);
    resolve(repository(connection));
    
  })
}

module.exports = Object.assign({}, {connect})
