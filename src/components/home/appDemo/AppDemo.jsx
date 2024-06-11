import React from 'react'

function AppDemo() {
  return (
    <div className="flex flex-col items-center py-12  ">
      <div className='relative'>
        <div className='absolute w-[118px] h-[84px] lg:w-[322px] lg:h-[230px] flex flex-col justify-center items-center text-[#1B3954] bg-[rgba(242,247,250,0.50)] shadow-md backdrop-blur-[2px] text-[7px] lg:text-[20px] font-bold lg:p-[40px] leading-[11px] lg:leading-[31px] -left-16 top-8 lg:top-20 lg:-left-44 rounded-md lg:rounded-[37px]'>
        Our app tracks the cleaning and life status of each Medu garment so you know the status and lifecycle stage.
        </div>

        <div className='absolute w-[176px] h-[74px] lg:w-[478px] lg:h-[230px] flex flex-col justify-center items-center text-[#1B3954] bg-[rgba(242,247,250,0.50)] shadow-md backdrop-blur-[2px] text-[7px] lg:text-[20px] font-bold lg:p-[40px] leading-[11px] lg:leading-[31px] bottom-8 -right-24 lg:bottom-20 lg:-right-80 rounded-[13px] lg:rounded-[37px]'>
        <ul className='flex flex-col gap-y-2 lg:gap-y-4'>
          <li className='flex gap-2 lg:gap-4'><img className='w-[11px] h-[11px] lg:w-full lg:h-full'  src='/assets/icons/check.svg'/>Check number of washes in real time</li>
          <li className='flex gap-2 lg:gap-4'><img className='w-[11px] h-[11px] lg:w-full lg:h-full'  src='/assets/icons/check.svg'/>Manage Medu gowns and coveralls</li>
          <li className='flex gap-2 lg:gap-4'><img  className='w-[11px] h-[11px] lg:w-full lg:h-full' src='/assets/icons/check.svg'/>Rate quality</li>
        </ul>
        </div>
         
            <img src="/assets/demo/demo.png" alt="App Demo" className="h-[258px] lg:h-full" />
            </div>
            <div className="mt-8">
            <button className="bg-[#95BC67]  py-2 lg:py-4 px-8 rounded-[40px] hover:bg-green-600 transitiontext-[14px] lg:text-[28px] text-white">
              See How Medu Works
            </button>
          </div>
            
            </div>  
  )
}

export default AppDemo