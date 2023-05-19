const VendorSchema = mongoose.Schema(
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





const Vendormodel = mongoose.model("vendormodel", VendorSchema);


 (async function createvendor(){
    let vendor = {
        Name:"Rahul",
        Email:"rahul321@gmail.com",
        Contact:"9876543210",
        Password:123456,
        Cpassword:123456,
    }

    let data =  await Vendormodel.create(vendor)
    console.log(data);
})();