import React from 'react'

function Bar() {
  
    return (
        <div className='absolute w-[252px] h-[217px] flex flex-col   justify-center items-center text-[#1B3954] bg-[rgba(242,247,250,0.50)] shadow-md backdrop-blur-[2px] bottom-0   right-20 rounded-[20px] text-left'>
            <h3 className='font-bold text-white text-[14px]  '>
            Your monthly savings  
            </h3>
            <p className='text-[9px] leading-[13px] text-white '>
            Chart shows savings on your investment for last month
            </p>
            <img src='/assets/hero/bars.png' alt='bar' className='w-[200px] h-[100px] object-cover '/>
            </div>
      )
  
}

export default Bar