import React, { useEffect, useRef, useState } from 'react'
import { Link, Outlet} from 'react-router-dom'
import { ClerkProvider} from '@clerk/clerk-react'
import { Bars3BottomRightIcon} from '@heroicons/react/24/solid'
import ChatList from '../components/ChatList'
import {SignedIn, SignIn, SignUp, UserButton } from '@clerk/clerk-react'
import {Route, Routes, useNavigate } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const queryClient = new QueryClient()
const RootLayout = () => {
  const [verticalMenu,setVerticalMenu] = useState(false);
  const divRef = useRef(null);
  const buttonRef = useRef(null);
  const handleClickOutside = (event) => {
    if (divRef.current &&
      !divRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)) {
      setVerticalMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
<QueryClientProvider client={queryClient}>
<div className='rootLayout bg-gray-900'>
<header className='w-full h-[7vh] text-white bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-lg border border-white/20 shadow-lg shadow-black/50 pl-10 pr-10 flex flex-row items-center justify-between sticky top-0 left-0 z-40'>
  <button 
    className='w-auto justify-end items-center lg:hidden flex flex-row text-white font-semibold'
    onClick={() => setVerticalMenu(!verticalMenu)} 
    ref={buttonRef}
  >
    <Bars3BottomRightIcon className='size-5 font-bold' />
  </button>
  <div className='w-[40%] justify-start items-center h-full flex flex-row'>
    <Link to="/" className='no-underline'>
      <p className='lg:text-lg text-md font-bold bg-gradient-to-r from-blue-500 to-red-500 inline-block text-transparent bg-clip-text'>Creo.<span className='lg:text-md text-sm'>TM</span></p>
    </Link>
  </div>
  <div className='w-[20%] items-center lg:flex flex-row hidden h-[73%] justify-around'>
    <Link to="/" className='no-underline'>
      <p className='lg:text-md text-sm bg-gradient-to-r from-blue-500 to-red-500 inline-block text-transparent bg-clip-text font-bold'>Home</p>
    </Link>
    <Link to="/dashboard" className='no-underline'>
      <p className='lg:text-md text-sm bg-gradient-to-r from-blue-500 to-red-500 inline-block text-transparent bg-clip-text font-bold'>Dashboard</p>
    </Link>
    <Link to="/about" className='no-underline'>
      <p className='lg:text-md text-sm bg-gradient-to-r from-blue-500 to-red-500 inline-block text-transparent bg-clip-text font-bold'>About</p>
    </Link>
  </div>
  <div className='w-[40%] justify-end items-center lg:flex flex-row hidden'>
    <UserButton />
  </div>
  <div className='justify-end items-center lg:hidden flex'>
    <UserButton />
  </div>
</header>
<div className={`text-white bg-slate-800 h-full w-2/3 pl-5 pr-5 pt-10 pb-5 fixed top-0 left-0 z-40 lg:hidden flex ${verticalMenu?'left-0 duration-500 ease-in-out':'left-[-18rem] duration-300 ease-in'}`} ref={divRef}>
  <ChatList/>
</div>
<main className='scrollbar-hide'>
    <Outlet/>
</main>
</div>
</QueryClientProvider>
</ClerkProvider>
  )
}
function ClerkProviderWithRoutes() {
  const navigate = useNavigate()

  return (
    <ClerkProvider publishableKey={clerk_pub_key} navigate={(to) => navigate(to)}>
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
        <Route
          path="/protected"
          element={
            <SignedIn>
              <ProtectedPage />
            </SignedIn>
          }
        />
      </Routes>
    </ClerkProvider>
  )
}
export default RootLayout
