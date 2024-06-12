import React from 'react'
import Testimonio from './Testimonio'
import Savings from './Savings'
import Bar from './Bar'

function Hero() {
  return (
    
    <header className="lg:py-16 xl:py-24">
        <div className="container mx-auto flex flex-col lg:flex-row items-center xl:px-8">
          <div className="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-start px-4">
            <h1 className="text-[28px] md:text-[45px] xl:text-[55px] font-bold leading-tight text-[#1B3954]  mb-4">
              <span className='text-[#95BC67]  text-[17px] md:text-[27px] xl:text-[34px]'>
                Save $150k per day</span> <br/> with the world&apos;s <br/> first Level 4 antiviral <br/> <span className='text-[#4E88B0]'>reusable gown</span>.
            </h1>
            <p className="max-w-sm md:max-w-md  lg:max-w-full mb-8 md:mb-4 text-gray-700 text-[10px] md:text-[17px] xl:text-[21px]">
              You save lives. Now you can save the planet, along with tens of millions of dollars every month with the
              only washable, sustainable medical gown of its kind.
            </p>
            <p className="max-w-sm lg:max-w-full mb-8 font-bold text-[#5587B6] text-[10px] md:text-[17px] xl:text-[21px]">
            See how our revolutionary technology is transforming healthcare.
            </p>
            <button className="text-white bg-[#95BC67] hover:bg-[#059669]  focus:ring-[#059669]  rounded-[40px] text-[14px] md:text-[22px] xl:text-[28px] px-5 py-2.5 text-center lg:w-3/4">
              Get Started Now
            </button>
            
          </div>
          <div className="w-full  px-4 flex justify-center mt-8 lg:mt-0 lg:justify-end items-center relative ">
          <Testimonio/>
          <Savings/>
          <Bar/>
            <img src="/assets/hero/hero.png" alt="Antiviral Gown" className=" w-full md:w-[534px] lg:w-[1000px]  object-cover  " />
          </div>
        </div>
        <div className='flex justify-center'>
        <p className="mt-4 text-[11px] text-center   md:text-[21px] text-[#1B3954] font-bold w-[60%] lg:w-full">
              Currently in trial with some of the most respected medical facilities in the U.S.
            </p>
        </div>
      </header>
  )
}

export default Hero