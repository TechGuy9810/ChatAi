import mongoose from "mongoose";


const chatSchema = new mongoose.Schema({
    userId:{
        type:String,
        require:true
    },
    history:[
        {
            role:{ 
            type:String,
            enum:["user","model"],
            require:true
        },
        parts:[
            {
                text:{
                    type:String,
                    require:true
                },
            },
        ],
        img:{
            type:String,
            require:false
        },
    }
    ,
    ],
},
{timestamps:true});

export default mongoose.model("Chat",chatSchema);