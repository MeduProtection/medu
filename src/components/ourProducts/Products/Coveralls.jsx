import Image from 'next/image'
import React from 'react'

function Coveralls() {
  return (
    <div className='container mx-auto flex flex-col lg:flex-row-reverse items-center xl:px-8 mt-[82 px] mb-[127px]   '>
        <div className='w-full h-full flex flex-col justify-center items-center '>
                <h1 className='text-[#1B3954] text-[85px] leading-[86px] mb-[20px] text-right'>
                    MEDU <br/> <span className='text-[#4E88B0]'>Coveralls</span>
                </h1>
                <Image src="/assets/OurProducts/Flap.png" width={336} height={334} alt="MEDU Gowns" />
                <div className='w-[334px] h-[87px] rounded-[34px] border-2 px-[30px] flex text-[24px] leading-[28px] items-center mt-[73px] mb-[16px]'>
                LEVEL 4 AAMI PB70 <br/>
                PROTECTION
                </div>
                <div className='w-[334px] h-[286px] rounded-[34px] border-2 px-[30px] flex flex-col text-[24px] leading-[28px] justify-center gap-[30px]'>
                    <p className='text-[18px] leading-[22px]'>Medu gowns offer optimal protection and come in a variety of colors and sizes.</p>
                    <div className='flex gap-[25px]'>
                        <div className='rounded-full w-[56px] h-[56px] colorShadow bg-white'/>
                        <div className='rounded-full w-[56px] h-[56px] colorShadow bg-[#5FD9CB]'/>
                        <div className='rounded-full w-[56px] h-[56px] colorShadow bg-[#4E88B0]'/>
                    </div>
                    <p className='tracking-wide text-[24px]'>X/M/L</p>
                </div>
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center '>
            <div className='h-[761px] w-[429px] bg-blue-500'/>
            <div className='bg-[#1B3954] w-[251px]  h-[100px] flex justify-center items-center text-white rounded-[40px] mt-[66px] text-[28px]'><Image src="/assets/icons/ar.svg" width={46} height={163} alt='ar icon'/>AR view</div>

        </div>
    </div>
  )
}

export default Coveralls