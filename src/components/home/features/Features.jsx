import React from 'react'

function Features() {
    return (
        <div className="flex flex-col items-center py-12 bg-[#1B3954] text-white">
          <h2 className="text-[21px] font-bold mb-4 text-center text-green-400">
            What has changed in the past 80 years?
          </h2>
          <p className="text-center mb-4 max-w-4xl text-[20px]">
            Nearly everything—except the desire to preserve the health and safety of patients and caregivers.
            
          </p>
          <p className="text-center mb-8 max-w-4xl text-[20px]">
          Created with a proprietary process that yields the highest levels of protection and sterility, Medu brings protective coverings into the 21st Century with reusable Level 4 gowns and coveralls that require no special laundering and prevent cross-contamination.
            
          </p>
          <div className='w-full flex flex-col items-center'>
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-center">
            <div>
              <div className="bg-blue-700 p-4 rounded-full inline-block mb-2">
                <img src="/path-to-icon1.png" alt="Icon 1" className="h-8 w-8" />
              </div>
              <h3 className="font-semibold">Highest level of user protection:</h3>
              <p>Level 4 AAMI PB70</p>
            </div>
            <div>
              <div className="bg-blue-700 p-4 rounded-full inline-block mb-2">
                <img src="/path-to-icon2.png" alt="Icon 2" className="h-8 w-8" />
              </div>
              <h3 className="font-semibold">Maximum resistance to virus penetration:</h3>
              <p>Level 4 AAMI PB70</p>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center'>
          <div  >
              <div className="bg-blue-700 p-4 rounded-full inline-block mb-2">
                <img src="/path-to-icon3.png" alt="Icon 3" className="h-8 w-8" />
              </div>
              <h3 className="font-semibold">Easy disinfection:</h3>
              <p>between washes with integrating existing laundry systems</p>
            </div>
            <div>
              <div className="bg-blue-700 p-4 rounded-full inline-block mb-2">
                <img src="/path-to-icon4.png" alt="Icon 4" className="h-8 w-8" />
              </div>
              <h3 className="font-semibold">Highly breathable</h3>
              <p></p>
            </div>
            <div>
              <div className="bg-blue-700 p-4 rounded-full inline-block mb-2">
                <img src="/path-to-icon5.png" alt="Icon 5" className="h-8 w-8" />
              </div>
              <h3 className="font-semibold">Excellent water repellency:</h3>
              <p>and resistance to liquid penetration</p>
            </div>
          </div>
          </div>
          <div className="mt-8">
            <button className="bg-green-500 text-blue-900 py-2 px-6 rounded-full hover:bg-green-600 transition">
              Discover Our Technology
            </button>
          </div>
        </div>
      );
}

export default Features