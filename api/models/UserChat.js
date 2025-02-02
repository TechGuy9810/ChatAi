import mongoose from "mongoose";


const UserChatSchema = new mongoose.Schema({
    userId:{
        type:String,
        require:true
    },
    chats:[
        {
            _id:{ 
            type:String,
            require:true
        },
        title:{ 
            type:String,
            require:true
        },
        createdAt:{ 
            type:Date,
            default:Date.now()
        },
    }
    ],
},
{timestamps:true});

export default mongoose.model("UserChat",UserChatSchema);