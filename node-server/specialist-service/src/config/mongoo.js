const mongoose = require('mongoose');

const connect = (options, mediator) => {
    console.log("Inside mongoose");
    // mediator.once('boot-ready', () => {
        
    const uri = 'mongodb://127.0.0.1:27017/' + options.db;
    
    mongoose.connect(uri, options.dboptions);
    
    const db = mongoose.connection;

    db.on("error", (err) => {
        console.log("> error occurred from the database");
        mediator.emit('db.error', err);
    });

    db.once("open", () => {
        console.log("> successfully opened the database");
        mediator.emit('db.ready', true);
    });
    // });
}

module.exports = Object.assign({}, {connect})