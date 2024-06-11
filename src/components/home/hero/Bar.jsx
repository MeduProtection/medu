import React from 'react'

function Bar() {
  
    return (
        <div className='absolute w-[159px] lg:w-[252px] h-[137px] lg:h-[217px] flex flex-col   justify-center items-left text-[#1B3954] bg-[rgba(242,247,250,0.50)] shadow-md backdrop-blur-[2px] -bottom-4 lg:bottom-0 left-14  lg:right-20 rounded-[20px] px-4'>
            <h3 className='font-bold text-white text-[9px] lg:text-[14px] text-left'>
            Your monthly savings  
            </h3>
            <p className='text-[6px] lg:text-[9px] leading-[13px] text-white '>
            Chart shows savings on your investment for last month
            </p>
            <img src='/assets/hero/bars.png' alt='bar' className='w-[120px] h-[70px] lg:w-[200px] lg:h-[100px] object-cover '/>
            </div>
      )
  
}

export default Bar