import React from 'react'
import Testimonio from './Testimonio'
import Savings from './Savings'
import Bar from './Bar'

function Hero() {
  return (
    
    <header className=" py-24">
        <div className="container mx-auto flex flex-wrap  md:flex-nowrap">
          <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center px-4">
            <h1 className="text-[55px] font-bold leading-tight text-[#1B3954]  mb-4">
              <span className='text-[#95BC67] text-[34px]'>
                Save $150k per day</span> <br/> with the world's <br/> first Level 4 antiviral <br/> <span className='text-[#4E88B0]'>reusable gown</span>.
            </h1>
            <p className="mb-8 text-gray-700 text-[21px]">
              You save lives. Now you can save the planet, along with tens of millions of dollars every month with the
              only washable, sustainable medical gown of its kind.
            </p>
            <p className="mb-8 font-bold text-[#5587B6] text-[21px]">
            See how our revolutionary technology is transforming healthcare.
            </p>
            <button className="text-white bg-[#95BC67] hover:bg-[#059669]  focus:ring-[#059669]  rounded-[40px] text-[28px] px-5 py-2.5 text-center lg:w-1/2">
              Get Started Now
            </button>
            
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 px-4 flex justify-end items-center relative ">
          <Testimonio/>
          <Savings/>
          <Bar/>
            <img src="/assets/hero/hero.png" alt="Antiviral Gown" className="w-[65%] object-cover " />
          </div>
        </div>
        <div className='flex justify-center'>
        <p className="mt-4 text-[21px] text-[#1B3954] font-bold">
              Currently in trial with some of the most respected medical facilities in the U.S.
            </p>
        </div>
      </header>
  )
}

export default Hero