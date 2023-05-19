
const mongoose = require("mongoose");

const ProposalSchema = new mongoose.Schema(
    {
        EventName:{
            type:String,
            required:true
        },
        Place_of_Event:{
            type:String,
            required:true
        },
        Proposal_type:{
            type:String,
            required:true
        },
        Event_type:{
            type:String,
            required:true
        },
        Budget:{
            type:Number,
            required:true
        },
        Date_from:{
            type:Date,
            require:true
        },
        Date_to:{
            type:Date,
            require:true
        },
        Descriptioon:{
            type:String
        },
        image: {
            type: Buffer
            
        },
        Food_pref:{
            type:String
        },
        Event:{
            type:String
        }
       
    }
)





const proposalmodel = mongoose.model("proposalmodel", ProposalSchema);


 (async function createvendor(){
    let proposal = {
        EventName:"marriage",
        Place_of_Event:"Goa",
        Proposal_type:"Venue",
        Event_type:'Party',
        Budget:50000,
        Date_from:25-5-23,
        Date_to:26-5-23

    }

    let data =  await proposalmodel.create(proposal)
    console.log(data);
})();