import express from "express"
import ImageKit from 'imagekit'
import cors from 'cors';
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserChat from "./models/UserChat.js";
import Chat from "./models/Chat.js";
import path from 'path';
import { requireAuth } from '@clerk/express'
import bodyParser from 'body-parser';
import { fileURLToPath } from "url";
dotenv.config();
const app = express();
const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors({
  origin:process.env.CLIENT_URL,
  credentials: true,
  methods: "GET,POST,PUT,DELETE,OPTIONS",
}))
const imagekit = new ImageKit({
  urlEndpoint: process.env.VITE_IMAGE_KIT,
  publicKey: process.env.VITE_IMAGE_PUBLIC_KEY,
  privateKey: process.env.VITE_IMAGE_PRIVATE_KEY
});
//mongodb connection
const connect = async ()=>{
  try{
await mongoose.connect(process.env.MONGO);
console.log("Connected to Mongo Db");
  }
  catch(error)
  {
    console.log(error);
  }
}
// image upload
app.get("/api/upload",async (req,res)=>{
    const result = imagekit.getAuthenticationParameters();
  res.send(result);
});
//getting user chats
app.get("/api/userChats",requireAuth({ signInUrl: '/sign-in' }), async (req,res)=>{
  const { userId } = req.auth;
  try{
    const userChats = await UserChat.find({userId:userId}).select('chats');
    res.status(200).send(userChats);
  }catch(error)
  {
    res.status(500).send("Error fetching chats");
  }
})
app.get("/api/chats/:id", requireAuth({ signInUrl: '/sign-in' }), async (req, res) => {
  const userId = req.auth.userId;

  try {
    const chat = await Chat.findOne({ _id: req.params.id, userId:userId });
    res.status(200).send(chat);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching chat!");
  }
});
// posting chats
app.post("/api/chats",requireAuth({ signInUrl: '/sign-in' }),async(req,res)=>{
  const userId = req.auth.userId;
  const {question,ans,img} = req.body;
try{
  const newItems = [
    ...(question
      ? [{ role: "user", parts: [{ text: question }], ...(img && { img }) }]
      : []),
    { role: "model", parts: [{ text: ans }] },
  ];
const newChat = new Chat(
  {
    userId:userId,
  }
);
const savedChat = await newChat.save();
await Chat.updateOne({_id:newChat._id, userId},{
  $push:{
    history:{
      $each:newItems,
    },
  },
})
const userChats = await UserChat.find({userId:userId});
if(!userChats.length)
{
  const newUserChats = new UserChat({
    userId:userId,
    chats:[
      {
        _id:savedChat._id,
        title:question ? question.substring(0, 20) : "Untitled Chat"
      }
    ]
  });
  await newUserChats.save();
}else{
  await UserChat.updateOne({
    userId:userId
  },{
    $push:{
      chats:{
        _id:savedChat._id,
        title:question ? question.substring(0, 20) : "Untitled Chat"
      }
    }
  });
  res.status(201).send(newChat._id);
}
}catch(err){
  console.log(err);
  res.status(500).send("Error in chat")
}
});

//updating chats
app.put("/api/chats/:id",requireAuth({ signInUrl: '/sign-in' }),async(req,res)=>{
const userId = req.auth.userId;
const {question,ans,img} = req.body;
try{
  const newItems = [
    ...(question
      ? [{ role: "user", parts: [{ text: question }], ...(img && { img }) }]
      : []),
    { role: "model", parts: [{ text: ans }] },
  ];
const updatedChat = await Chat.updateOne({_id:req.params.id, userId},{
  $push:{
    history:{
      $each:newItems,
    },
  },
})
res.status(200).json(updatedChat);
  }
  catch(error)
  {
    res.status(500).json("Error updating chats!");
  }
})
app.get('/protected', requireAuth({ signInUrl: '/sign-in' }), (req, res) => {
  return res.json({ userId: req.auth.userId })
})

//deleting chats
app.delete("/api/chats/:id",requireAuth({ signInUrl: '/sign-in' }),async(req,res)=>{
try{
const id = req.params.id;
await Chat.findByIdAndDelete({_id:id});
const result = await UserChat.findOneAndUpdate({userId:req.auth.userId},{$pull:{chats:{_id:id}}});
if (result.modifiedCount > 0) {
  return res.status(200).json(true);
} else {
  return res.status(404).json({message:"not found"});
}
}catch (err) {
  console.log(err);
  res.status(500).send("Error fetching chat!");
}
});

app.listen(process.env.PORT,()=>{
  connect();
    console.log(`server is running on port ${process.env.PORT}`)
})