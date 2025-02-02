import React, { useEffect } from 'react'
import NewPrompt from './NewPrompt';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { IKImage } from 'imagekitio-react';
import ReactMarkdown from "react-markdown";
const Chat = () => {
  const path = useLocation().pathname;
  const chatId = path.split("/").pop();
  const { isPending, error, data} = useQuery({
    queryKey: ["chat",chatId],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`,{
        credentials:"include"
      }).then((res) =>
        res.json()
      ),
  })
  return (
    <div className=' w-full h-full flex flex-col items-center'>
      <div className='wrapper flex-1 overflow-scroll scrollbar-hide w-full flex flex-col items-center'>
      {isPending ? (
  <div className="flex justify-center items-center h-full w-full">
    <span className="text-2xl lg:text-3xl font-bold text-slate-300 animate-pulse">
      Loading...
    </span>
  </div>
) : error ? (
  <div className="flex justify-center items-center h-full w-full">
    <span className="text-2xl lg:text-3xl font-bold text-red-500">
      Something went wrong!
    </span>
  </div>
) : (
  <div className='chat lg:w-[70%] w-full flex flex-col h-full overflow-scroll scrollbar-hide pt-2 pb-2 gap-5'>
    {data.history.map((message, i) => {
      return (
        <div className='max-w-full' key={i}>
          {message.role === "user" ? (
            <>
            <div className='w-full max-w-auto flex justify-end mt-4'>
              {message.img && (
                <IKImage
                  className='rounded-lg'
                  urlEndpoint={import.meta.env.VITE_IMAGE_KIT}
                  path={message.img}
                  height={300}
                  width={400}
                  transformation={[{ height: 300, width: 400 }]}
                  loading="lazy"
                  lgip={{ active: true, quality: 20 }}
                />
              )}
              </div>
              <div className='w-full max-w-auto flex justify-end mt-4'>
                <div className='text-white w-fit max-w-auto h-full p-2 bg-slate-600 rounded-lg flex'>
                  {message.parts[0].text}
                </div> 
              </div>
            </>
          ) : (
            <div className='text-white p-2 max-w-[100%] radius-lg' key={message._id}>
              <ReactMarkdown>{message.parts[0].text}</ReactMarkdown>
            </div>
          )}
        </div>
      );
    })}
    <NewPrompt data={data} />
  </div>
)}

      </div>
    </div>
  )
}

export default Chat
