const mongoose = require('mongoose');
const db_link = "mongodb+srv://Admin:RGT6zvw2Q6HVR7Rx@cluster0.phigsem.mongodb.net/test"
mongoose.connect(db_link)
.then(function(db){
    console.log('db connected')
})
.catch(function(err){
    console.log(err);
})
