import React from 'react'

function Testimonio() {
  return (
    <div className='absolute w-[171px] h-[84px] md:w-[246px] md:h-[121px] flex  justify-between items-center text-[#1B3954] bg-[rgba(242,247,250,0.50)] shadow-md backdrop-blur-[2px]   left-0 md:left-20 top-16 lg:left-0  lg:top-auto lg:bottom-40 xl:left-80 rounded-[20px]'>
        <div className='w-1/3  h-full flex flex-col items-center justify-center '>
            <img src='/assets/hero/doctor.svg' alt='doctor' className='w-[41px] h-[41px] md:w-[60px] md:h-[60px] object-cover '/>
        
        </div>
        <div className='w-2/3 flex flex-col pr-4 '>
            <h3 className='text-white text-[9px] md:text-[14px] font-bold'>Alexander Collins</h3>
            <p className='text-[5px] lg:text-[7px] text-[#1B3954]'>Plastic surgeon</p>
            <p className='text-white text-[6px] md:text-[9px] leading-[9px] md:leading-[13px] mt-1'>MEDU gowns have transformed my surgeries, offering top-notch protection and saving costs.</p>
            <div className='flex mt-1'>
                <img src='/assets/icons/star.svg' alt='quote' className='w-[7px] h-[7px] lg:w-[10px] lg:h-[10px]'/>
                <img src='/assets/icons/star.svg' alt='quote' className='w-[7px] h-[7px] lg:w-[10px] lg:h-[10px]'/>
                <img src='/assets/icons/star.svg' alt='quote' className='w-[7px] h-[7px] lg:w-[10px] lg:h-[10px]'/>
                <img src='/assets/icons/star.svg' alt='quote' className='w-[7px] h-[7px] lg:w-[10px] lg:h-[10px]'/>
                <img src='/assets/icons/star.svg' alt='quote' className='w-[7px] h-[7px] lg:w-[10px] lg:h-[10px]'/>
            </div>
        
        </div>
        </div>
  )
}

export default Testimonio