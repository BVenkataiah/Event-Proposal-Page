
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        Name:{
            type:String,
            required:true
        },
        Email:{
            type:String,
            required:true
        },
        Contact:{
            type:Number,
            required:true
        },
        Password:{
            type:String,
            required:true
        },
        Cpassword:{
            type:String,
            required:true
        }
       
    }
)


module.exports = mongoose.model("UserSchema", UserSchema);  


const usermodel = mongoose.model("usermodel", UserSchema);


 (async function createuser(){
    let user = {
        Name:"Abhinav",
        Email:"rajabhinav321@gmail.com",
        Contact:"9876543210",
        Password:123456,
        Cpassword:123456,
    }

    let data =  await usermodel.create(user)
    console.log(data);
})();


module.exports = mongoose.model("UserSchema", UserSchema);  