import React from "react";

const ResponsiveCards = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center lg:h-[60vh] sm:h-[70vh] w-full bg-gray-900 lg:pt-0 lg:pb-0 pt-10 pb-10">
      {/* Card for Creators */}
      <div className="flex flex-col justify-between bg-[#1a1a1a] text-white rounded-lg p-6 h-[30%] w-[80%] sm:h-[50%] sm:w-[25%] mb-4 sm:mb-0 border-2 border-white">
        <h2 className="text-xl font-semibold">For Creators</h2>
        <div className='overflow-hidden lg:flex hidden gap-5'>
          <img src="/show1.jpg" alt="" className='h-[100%] max-w-[100%] object-cover rounded-md'/>
          <img src="/show2.jpeg" alt="" className='h-[100%] max-w-[100%] object-cover rounded-md'/>
        </div>
        <p className="text-sm mt-2">Create production-quality visual assets for your projects with unprecedented quality, speed, and style-consistency.</p>
      </div>

      {/* Card for Teams */}
      <div className="flex flex-col justify-between bg-[#1a1a1a] text-white rounded-lg p-6 h-[30%] w-[80%] sm:h-[50%] sm:w-[25%] mb-4 sm:mb-0 border-2 border-white">
        <h2 className="text-xl font-semibold">For Teams</h2>
        <div className='overflow-hidden lg:flex hidden gap-5'>
          <img src="/show3.jpg" alt="" className='h-[100%] max-w-[100%] object-cover rounded-md'/>
          <img src="/show4.jpg" alt="" className='h-[100%] max-w-[100%] object-cover rounded-md'/>
        </div>
        <p className="text-sm mt-2">Bring your team's best ideas to life at scale, with our intuitive AI-first creative suite designed for collaboration and built for business.</p>
      </div>

      {/* Card for Developers */}
      <div className="flex flex-col justify-between bg-[#1a1a1a] text-white rounded-lg p-6 h-[30%] w-[80%] sm:h-[50%] sm:w-[25%] border-2 border-white">
        <h2 className="text-xl font-semibold">For Developers</h2>
        <div className='overflow-hidden lg:flex hidden gap-5'>
          <img src="/show4.jpg" alt="" className='h-[100%] max-w-[100%] object-cover rounded-md'/>
          <img src="/show3.jpg" alt="" className='h-[100%] max-w-[100%] object-cover rounded-md'/>
          <img src="/show5.jpg" alt="" className='h-[100%] max-w-[100%] object-cover rounded-md'/>
        </div>
        <p className="text-sm mt-2">Experience content creation excellence with Leonardo.AI's API. With unmatched scalability, effortlessly tailor outputs to your brand guideline.</p>
      </div>
    </div>
  );
};

export default ResponsiveCards;
