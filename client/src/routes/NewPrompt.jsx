import React, { useEffect, useRef,useState } from 'react'
import Upload from '../components/Upload.jsx';
import { IKImage } from 'imagekitio-react';
import model from '../lib/gemini.js';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import ReactMarkdown from "react-markdown";
import { FaXmark } from "react-icons/fa6";
const NewPrompt = ({data}) => {
  const [img,setImg] = useState({
    isLoading:false,
    error:"",
    dbData:{},
    aiData:{},
  });
  const [question,setQuestion] = useState('');
  const [answer,setAnswer] = useState('');
  const endRef = useRef();
  const resetRef = useRef();
  useEffect(()=>{
endRef.current.scrollIntoView({behavior:"smooth"});
  },[question,answer,img.dbData])

  const chat = model.startChat({
    history: [
      { role: "user", parts: [{ text: "What is AI?" }] }
    ]
  });
  const handlePic = () => {
    setImg({
      isLoading: false,
      error: "",
      dbData: {},
      aiData: {},
    });
    resetRef.current.reset();
  };
//mutation
const queryClient = useQueryClient()
const mutation = useMutation({
  mutationFn: async ({ question, answer, img }) => {
    return fetch(`${import.meta.env.VITE_API_URL}/api/chats/${data._id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question, ans: answer, img }),
    }).then((res) => res.json());
  },
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries({ queryKey: ["chat", data._id] }).then(() => {
      setQuestion("");
      setAnswer("");
      setImg({
        isLoading: false,
        error: "",
        dbData: {},
        aiData: {},
      });
    });
  },
  onError: (err) => {
    console.log(err);
  },
});
const add = async (text) => {
  setQuestion(text); // Set the question
  try {
    const result = await chat.sendMessage(
      Object.keys(img.aiData).length > 0 ? [img.aiData, text] : [text]
    );
    const ans =result.response.text();
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
        {img.dbData?.filePath &&(
        <div className='relative h-[20%] w-[15%]'>
        <FaXmark className='text-white font-bold lg:text-2xl text-lg absolute top-[5%] right-[5%] cursor-pointer p-1 rounded-full bg-gray-700' onClick={handlePic}/>
        <IKImage
        urlEndpoint={import.meta.env.VITE_IMAGE_KIT}
        path={img.dbData?.filePath}
        transformation={[{ height: 200, width: 200 }]}
        className="w-full h-auto rounded-lg border-2 border-white"
      />
      </div>
      )}
      {question&&(
        <div className='text-white max-w-[80%] p-2 bg-slate-600 rounded-lg self-end '>{question}</div>
      )}
            {answer&&(
        <div className='text-white p-2 max-w-[100%] radius-lg '><ReactMarkdown>{answer}</ReactMarkdown></div>
      )}
      <div ref={endRef} className='lg:pb-1 sm:pb-1'></div>
<form className='h-[15%] bg-slate-800 w-full justify-between p-4 pb-6 rounded-2xl flex flex-col' onSubmit={handleSubmit} ref={resetRef}>
  <input type="text" name='text' placeholder='Ask me anything...' className='w-full focus-visible:outline-none bg-inherit placeholder:text-slate-300 text-white h-auto'/>
  <div className="flex w-full h-1/3 justify-between">
    <Upload setImg={setImg}/>
    <input type="file" multiple={false} hidden />
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>
</button>
  </div>
</form>
    </>
  )
}

export default NewPrompt;
