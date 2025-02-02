import React, { useEffect, useState } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { useQuery} from '@tanstack/react-query';

const ChatList = () => {
  const [refresh, setRefresh] = useState(false);

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['userChats', refresh],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/userChats`, {
        credentials: "include",
      });
      return response.json();
    },
  });

  // Handle delete
  const handleDelete = async (id) => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/chats/${id}`, {
      method: 'DELETE',
      credentials: "include",
    });
    setRefresh(prev => !prev); // Trigger re-fetch
  };

  useEffect(() => {
    refetch();
  }, [refresh, refetch]);

  return (
    <div className='chatList flex flex-col justify-between h-full w-full'>
      <div className='flex flex-col'>
        <span className='mb-2 text-lg font-bold'>Dashboard</span>
        <Link className='p-2 text-sm' to="/dashboard">Create a new Chat</Link>
        <Link className='p-2 text-sm' to="/">Explore Lama AI</Link>
        <Link className='p-2 text-sm' to="/">Contact</Link>
        <hr className='h-[2px] bg-slate-100 opacity-[0.1] rounded-sm mt-2 mb-2 ml-0 mr-0'/>
        <span className='mb-2 text-lg font-bold'>Recent Chats</span>
        <div className='flex flex-col overflow-y-scroll scrollbar-hide h-72'>
          {isPending ? (
            "Loading..."
          ) : error ? (
            "Something went wrong!"
          ) : !data || data.length === 0 || !data[0]?.chats ? (
            <span className='p-1 rounded-md mb-1 text-slate-200 text-sm font-semibold'>
              No Conversation...
            </span>
          ) : (
            data[0].chats.map((chat) => (
              <div className='p-2 hover:bg-slate-700 rounded-md mb-1 text-slate-200 font-semibold cursor-pointer relative flex items-center group' key={chat._id}>
                <Link to={`/dashboard/chats/${chat._id}`} className='w-full'>
                  {chat.title}
                </Link>
                <div className='absolute right-[10%] opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                  <MdOutlineDeleteOutline 
                    className='text-white cursor-pointer' 
                    onClick={() => handleDelete(chat._id)} 
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className='upgrade w-full h-24 flex flex-col justify-end items-start'>
        <p className='lg:text-lg text-md bg-gradient-to-r from-blue-500 to-red-500 inline-block text-transparent bg-clip-text font-bold'>Creo.TM</p>
        <div className="texts flex flex-col h-1/2 justify-around">
          <span className='text-lg font-semibold'>Upgrade to Creo.AI Pro</span>
          <span className='text-xs'>Get Unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
