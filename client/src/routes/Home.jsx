import React, { useEffect } from 'react'
import { ReactLenis } from 'lenis/react'
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommunitySection from '../components/CommunitySection';
import Footer from '../components/Footer';
import ResponsiveCards from '../components/ResponsiveCards';
gsap.registerPlugin(useGSAP,ScrollTrigger);
const Home = () => {
  const lenisRef = useRef();
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, [])
  const ref = useRef();
  useGSAP(()=>{
    
    let tl =  gsap.timeline({
       scrollTrigger:{
        trigger:".features",
        start:'top 70%',
        scroller:"body",
        scrub:true,
      },
      delay:2
     });
     tl.to(".featuresDiv",{
      width:"100%",
      stagger:0.5,
     });

     let tl2 =  gsap.timeline({
      scrollTrigger:{
       trigger:".featuredIn",
       start:'top 70%',
       scroller:"body",
       scrub:true
     },
     delay:2
    });
    tl2.to(".featuredInDiv",{
     width:"100%",
     stagger:0.5,
    });

     gsap.set('.rightDiv',
     {
      xPercent:130,
      opacity:0.3
     })
     gsap.set('.leftDiv',{
      xPercent:-130,
      opacity:0.3
     })
     gsap.to('.rightDiv, .leftDiv',{
      scrollTrigger:{
        trigger:'.outerMostFeaturesDiv',
        start:'top bottom',
        end:'bottom 90%',
        scrub:2
      },
      xPercent:0,
      opacity:1
     });

  },{});
const handleMouseMove = (e)=>{
gsap.to(".cursor",{
  x:e.clientX,
  y:e.clientY,
  duration:0.5,
  ease:"power1.out"
});
}
  return (
    <ReactLenis options={{ autoRaf: false }} ref={lenisRef}>
    <div className="main h-full w-full overflow-x-hidden" onMouseMove={handleMouseMove}>

    <div className='w-full flex lg:flex-row flex-col h-screen'>
    <div className="lg:w-1/2 w-full lg:h-full h-[50%] flex flex-col items-center justify-center lg:p-10 p-5 z-10">
      <h1 className='lg:text-9xl text-8xl bg-gradient-to-r from-blue-500 to-red-500 inline-block text-transparent bg-clip-text font-semibold'>Creo AI</h1>
      <p className='lg:text-2xl text-lg p-4 font-bold text-white'>Your All in one AI Assitant</p>
      <p className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
    <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-blue-500 rounded-full blur-md"></span>
        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-red-500 rounded-full blur-md"></span>
    </span>
    <a href='/dashboard' className="relative text-white">Get Started</a>
</p>
    </div>
 
    <div className="right lg:w-1/2 w-full lg:h-full h-1/3 flex items-center justify-center">
      <div className='flex flex-row items-center justify-center w-[80%] h-1/2 relative'>
<div className="bgContainer w-full h-full overflow-hidden absolute top-0 left-0 rounded-sm">
  <div className="bg-[url('/bg.png')] w-[200%] h-full opacity-[0.2] size-auto">
  </div>
</div>
<img src="/robot6.png" alt="" className='w-full h-full object-contain' />
      </div>
      
    </div>
    </div>


    <div className="lg:h-[60vh] h-[30vh] w-full bg-white flex justify-center items-center">
    <div className="w-[90%] h-[80%] bg-gray-800 flex p-10 justify-center flex-col rounded-lg">
     <div className='testimonal'><h1 className='split text font-extrabold lg:text-6xl text-2xl text-white'>Great App, Great Performance, Fine Work Absolutely Loved It!</h1></div>
      <div className='lg:pt-10 pt-2'><span className='lg:text-2xl text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500'>~ Sam Altman.</span><span className='text-white pl-2 lg:text-md text-sm font-bold'>CEO Open AI</span></div>
    </div>
    </div>

    <div className="features lg:h-[75vh] lg:pt-10 lg:pb-10 pt-5 pb-5 h-[60vh] w-full bg-white flex flex-col justify-center items-center">
      <div className='lg:h-[20%] h-[10%] w-full flex flex-row items-start overflow-hidden relative'>
      <h1 className='lg:text-7xl text-4xl font-bold opacity-[0.2] absolute w-[100%] whitespace-nowrap lg:left-[40%] left-[15%]'>Our Features</h1>
      <h1 className='lg:text-7xl text-4xl font-bold opacity-1 absolute lg:left-[40%] left-[15%] whitespace-nowrap w-[0] overflow-hidden featuresDiv'>Our Features</h1>
      </div>
      <div className='lg:flex lg:h-[80%] h-[90%] w-[90%] outerMostFeaturesDiv'>
        <div className='lg:w-[60%] w-full lg:h-full h-[50%] flex flex-col justify-center p-10 leftDiv'>
          <h1 className='lg:text-xl text-lg font-bold'>What We Offer!</h1>
          <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ut expedita corporis necessitatibus omnis soluta ipsa natus pariatur, a debitis, consequuntur sapiente illum dolores veritatis aut exercitationem facere nam quo.</p>
        </div>
        <div className='lg:w-[40%] w-full lg:h-full h-[50%] grid grid-cols-2 rightDiv'>
        <div className='overflow-hidden '>
          <img src="/show1.jpg" alt="" className='h-[100%] max-w-[100%] object-cover'/>
        </div>
        <div className='grid grid-rows-2 overflow-hidden'>
          <div className='overflow-hidden'>
          <img src="/show2.jpeg" alt="" className='h-[100%] w-[100%] object-cover'/>
          </div>
          <div className='overflow-hidden '>
          <img src="/profile1.jpg" alt="" className='h-[100%] w-[100%] object-cover'/>
          </div>
        </div>
        </div>
      </div>
    </div>
<ResponsiveCards/>

    <div className='lg:h-[50vh] h-[20vh] bg-white lg:block hidden pt-5 pb-5 featuredIn'>
<div className='w-full h-[30%] flex items-center justify-center overflow-hidden relative featuredIn'>
  <h1 className='lg:text-7xl text-4xl font-bold opacity-[0.2] absolute w-[100%] whitespace-nowrap lg:left-[40%] left-[25%]'>Featured In</h1>
  <h1 className='lg:text-7xl text-4xl font-bold opacity-1 absolute lg:left-[40%] left-[25%] whitespace-nowrap w-[0] overflow-hidden featuredInDiv'>Featured In</h1>
</div>
<div className='w-full h-[70%] flex space-x-16 overflow-x-hidden group items-center'>
<div className='flex justify-between w-full group-hover:paused' ref={ref}>
  <img src="/logo1.png" className='max-w-none lg:w-[110px] lg:h-[102px] w-[80px] h-[70px] grayscale' alt="logo1" />
  <img src="/logo2.png" className='max-w-none lg:w-[110px] lg:h-[102px] w-[80px] h-[70px] grayscale' alt="logo2" />
  <img src="/logo3.png" className='max-w-none lg:w-[110px] lg:h-[102px] w-[80px] h-[70px] grayscale' alt="logo3" />
  <img src="/logo4.png" className='max-w-none lg:w-[110px] lg:h-[102px] w-[80px] h-[70px] grayscale' alt="logo4" />
  <img src="/logo5.png" className='max-w-none lg:w-[110px] lg:h-[102px] w-[80px] h-[70px] grayscale' alt="logo5" />
  <img src="/logo6.png" className='max-w-none lg:w-[110px] lg:h-[102px] w-[80px] h-[70px] grayscale' alt="logo6" />
  <img src="/logo7.png" className='max-w-none lg:w-[110px] lg:h-[102px] w-[80px] h-[70px] grayscale' alt="logo7" />
</div>
</div>
    </div>
    
    <div className='cursor h-[40px] w-[40px] bg-slate-200 lg:fixed hidden top-0 left-0 rounded-full z-50'>
    </div>

         <CommunitySection/>
    <div className="bg-white mt-10 h-[50vh] flex items-center justify-center mb-10">
        <div className="w-[80%] md:w-[60%] flex flex-col md:flex-row items-center gap-6">
          {/* Left Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Follow Our Journey</h2>
            <p className="text-gray-600">Stay up to date with all our products and announcements by subscribing to our newsletter.</p>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2">
            <input 
              type="email" 
              placeholder="Email address*" 
              className="w-full border rounded p-3 mb-2 text-gray-700"
            />
            <div className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <p className="text-sm text-gray-600">I agree to receive marketing communications from Stability AI.</p>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              You may unsubscribe from these communications at any time. For more information, please review our Privacy Policy.
            </p>
            <button className="bg-gray-900 text-white font-bold px-6 py-2 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>

     <Footer/>
    </div>
    </ReactLenis>
  )
}

export default Home
