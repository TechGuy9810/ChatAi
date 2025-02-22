import React from 'react'
import { useMutation,useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import model from '../lib/gemini.js';
import { useState } from 'react';
import { useRef} from 'react';
import Upload from '../components/Upload.jsx';
import { IKImage } from 'imagekitio-react';
import { FaXmark } from "react-icons/fa6";
const Dashboard = () => {
  const [img,setImg] = useState({
    isLoading:false,
    error:"",
    dbData:{},
    aiData:{},
  });
  const [question,setQuestion] = useState('');
  const [answer,setAnswer] = useState('');
  const resetRef = useRef();
const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient()
  const chat = model.startChat({
    history: [
      { role: "user", parts: [{ text: "What is AI?" }] }
    ]
  });

const mutation = useMutation({
  mutationFn: async ({ question, answer, img })=>{
    return fetch(`${import.meta.env.VITE_API_URL}/api/chats`,{
      method:"POST",
      credentials:"include",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({ question, ans: answer, img }),
    }).then((res)=>res.json());
  },
  onSuccess: (id) => {
    queryClient.invalidateQueries({ queryKey: ['userChats'] }).then(()=>{
      setQuestion("");
      setAnswer("");
      setImg({
        isLoading: false,
        error: "",
        dbData: {},
        aiData: {},
    });
  });
    navigate(`/dashboard/chats/${id}`)
  },
})


  const add = async (text) => {
    setQuestion(text); // Set the question
    try {
      setLoading(true);
      const result = await chat.sendMessage(
        Object.keys(img.aiData).length > 0 ? [img.aiData, text] : [text]
      );
      const ans = result.response.text();
      setAnswer(ans); // Update the state for the answer
  
      // Pass the values directly to the mutation to ensure the latest data
      mutation.mutate({
        question: text,
        answer: ans,
        img: img.dbData?.filePath || undefined,
      });
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  const handlePic = () => {
    setImg({
      isLoading: false,
      error: "",
      dbData: {},
      aiData: {},
    });
    resetRef.current.reset();
  };
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const text = e.target.text.value;
    if(text==="") return;
    add(text);
    resetRef.current.reset();
    }
  return (
    <>
    {loading ?(
      <div className='h-full w-full flex justify-center items-center'>
            <span className="text-2xl lg:text-3xl font-bold text-slate-300 animate-pulse">
      Loading...
    </span>
      </div>
    ):(
      <div className='bg-none rounded-lg h-full w-full flex flex-col lg:justify-center justify-center items-center'>
      <div className="texts w-[60%] h-[30%] lg:pt-2 lg:pb-2 p-0 lg:flex hidden">
        <div className="options flex flex-row items-center h-full w-full justify-evenly">
          <div className="option w-full h-full p-4 flex flex-col items-center hover:bg-slate-700 justify-center rounded-lg cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6 h-[50%] w-[50%] text-purple-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg>

            <span className='text-white'>Chats</span>
          </div>
          <div className="option w-full h-full p-4 flex flex-col items-center justify-center hover:bg-slate-700 rounded-lg cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6 h-[50%] w-[50%] text-green-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
            <span className='text-white'>Create Images</span>
          </div>
          <div className="option w-full h-full p-4 flex flex-col items-center justify-center hover:bg-slate-700 rounded-lg cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6 h-[50%] w-[50%] text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

            <span className='text-white'>Write Codes</span>
          </div>
        </div>
      </div>
      {img.dbData?.filePath &&(
        <div className='relative'>
        <FaXmark className='text-white font-bold lg:text-2xl text-lg absolute top-[5%] right-[5%] cursor-pointer p-1 rounded-full bg-gray-700' onClick={handlePic}/>
        <IKImage
        urlEndpoint={import.meta.env.VITE_IMAGE_KIT}
        path={img.dbData?.filePath}
        transformation={[{ height: 200, width: 200 }]}
        className="w-full h-auto rounded-lg border-2 border-white"
      />
      </div>
      )}
      <div className="formContainer w-full lg:h-[20%] h-[15%] items-center flex justify-center">
<form onSubmit={handleSubmit} className='lg:h-[80%] h-full bg-slate-800 lg:w-[70%] w-[100%] flex flex-col justify-between p-4 rounded-2xl' ref={resetRef}>
  <input type="text" name="text" placeholder='Ask me anything...' className='w-full focus-visible:outline-none bg-inherit placeholder:text-slate-300 text-white h-auto'/>
  <div className="flex w-full h-1/3 justify-between">
  <div className="flex w-full h-1/3 justify-between">
    <Upload setImg={setImg}/>
    <input type="file" multiple={false} hidden />
  </div>
    <button className='text-white' type='submit'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>
</button>
  </div>
</form>
      </div>
    </div>
    )}
    </>
  )
}

export default Dashboard
