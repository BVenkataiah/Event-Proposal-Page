const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const cors = require("cors");
const proposalRouter = require("./routes/proposal");
const vendorRouter = require("./routes/vendor");
const userRouter = require("./routes/User");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { getAuthenticate } = require("./authentication/authentication");


dotenv.config();
// const reactUrl = process.env.REACT_URL || 



const app = express();
app.use(cors({
    credentials:true,
    origin:"*",
}));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "secret",
    cookie: {
        secure:true,            
        maxAge: 60*60*1000,
        sameSite: "none"       
    }
}

))
app.use(cookieParser());
app.set("trust proxy", 1)
app.use(express.json());


app.get("/check", getAuthenticate, (req, res)=>{
    if(req.result.vendorName!==undefined){
        res.status(200).json({
            msg:"vendor"
        })
    }else if(req.result.userName!==undefined){
        res.status(200).json({
            msg:"user"
        })
    }else{
        res.status(200).json({
            msg:"sign"
        })
    }
})
app.use("/events", proposalRouter);
app.use("/users", userRouter);
app.use("/vendors", vendorRouter);
app.get("/", (req, res)=>{
    res.status(200).json({msg:"Welcome"});
})

mongoose.connect("mongodb+srv://Admin:RGT6zvw2Q6HVR7Rx@cluster0.phigsem.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>
    console.log("connected to mongodb")
).catch((err) => {
    console.log(`${err}`)
})

const PORT = 5000 || process.env.PORT
app.listen(PORT, () => {
    console.log(`port is running at ${PORT}`)
})