import React from 'react'

function Hero() {
  return (
    
    <header className="bg-[#ECFDF5]">
        <div className="container mx-auto flex flex-wrap py-24 md:flex-nowrap">
          <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center px-4">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-4">
              Save $150k per day with the world\'s first Level 4 antiviral reusable gown.
            </h1>
            <p className="mb-8 text-gray-700">
              You save lives. Now you can save the planet, along with tens of millions of dollars every month with the
              only washable, sustainable medical gown of its kind.
            </p>
            <button className="text-white bg-[#10B981] hover:bg-[#059669] focus:ring-4 focus:ring-[#059669] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Get Started Now
            </button>
            <p className="mt-4 text-sm text-gray-500">
              Currently in trial with some of the most respected medical facilities in the U.S.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 px-4">
            <img src="/placeholder.svg" alt="Antiviral Gown" className="rounded-xl" />
          </div>
        </div>
      </header>
  )
}

export default Hero