import React from 'react'

function Hero() {
  return (
    
    <header className="bg-[#ECFDF5] py-24">
        <div className="container mx-auto flex flex-wrap  md:flex-nowrap">
          <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center px-4">
            <h1 className="text-4xl font-bold leading-tight text-[#1B3954]  mb-4">
              <span className='text-[#95BC67]'>
                Save $150k per day</span> with the world's <br/> first Level 4 antiviral <span className='text-[#4E88B0]'>reusable gown</span>.
            </h1>
            <p className="mb-8 text-gray-700">
              You save lives. Now you can save the planet, along with tens of millions of dollars every month with the
              only washable, sustainable medical gown of its kind.
            </p>
            <p className="mb-8 font-bold text-[#5587B6]">
            See how our revolutionary technology is transforming healthcare.
            </p>
            <button className="text-white bg-[#95BC67] hover:bg-[#059669]  focus:ring-[#059669]  rounded-3xl text-lg px-5 py-2.5 text-center">
              Get Started Now
            </button>
            
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 px-4">
            <img src="/placeholder.svg" alt="Antiviral Gown" className="rounded-xl" />
          </div>
        </div>
        <div className='flex justify-center'>
        <p className="mt-4 text-sm text-[#1B3954] font-bold">
              Currently in trial with some of the most respected medical facilities in the U.S.
            </p>
        </div>
      </header>
  )
}

export default Hero