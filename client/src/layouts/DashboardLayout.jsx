import { useAuth } from '@clerk/clerk-react'
import React , {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import ChatList from '../components/ChatList'
const DashboardLayout = () => {
  const {userId, isLoaded} = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    if(isLoaded && !userId)
    {
      navigate("/sign-in");
    }
  },[isLoaded,userId,navigate]);
  if(!isLoaded) return "Loading....";
  return (
<div className='dashboardLayout pl-7 pr-7 flex gap-8 bg-gray-900 h-screen pb-[10vh] fixed w-full'>
<div className='menu lg:w-72 text-white bg-gray-800 h-full rounded-lg pl-5 pr-5 pt-5 pb-5 lg:flex hidden'>
  <ChatList/>
</div>
<main className='content flex-1 bg-gray-900'>
    <Outlet/>
</main>
</div>
  )
}
export default DashboardLayout;