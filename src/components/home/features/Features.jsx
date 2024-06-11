import React from 'react'

function Features() {
    return (
        <div className="flex flex-col items-center py-12 bg-[#1B3954] text-white">
          <h2 className=" text-[18px] md:text-[21px] font-bold mb-4 text-center text-[#95BC67]  ">
            What has changed in the past <br className='lg:hidden'/> 80 years?
          </h2>
          <p className="text-center mb-4 max-w-md lg:max-w-4xl text-[10px] md:text-[17px] lg:text-[20px] px-10">
            Nearly everything—except the desire to preserve the health and safety of patients and caregivers.
            
          </p>
          <p className="text-center mb-8 max-w-lg  lg:max-w-4xl text-[10px] md:text-[17px] lg:text-[20px] px-10">
          Created with a proprietary process that yields the highest levels of protection and sterility, Medu brings protective coverings into the 21st Century with reusable Level 4 gowns and coveralls that require no special laundering and prevent cross-contamination.
            
          </p>
          <div className='w-full flex flex-col items-center'>
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-36 text-center mb-8 mt-8">
            <div>
              <div className="bg-[#4E88B0] p-4 rounded-[5px] inline-block mb-2">
                <img src="/assets/features/highest.svg" alt="Icon 1" className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-[9px] md:text-[13px] lg:text-[20px]">Highest level of user <br/> protection:</h3>
              <p className='text-[9px] md:text-[13px] lg:text-[20px]' >Level 4 AAMI PB70</p>
            </div>
            <div>
              <div className="bg-[#4E88B0] p-4 rounded-[5px] inline-block mb-2">
                <img src="/assets/features/features.svg" alt="Icon 2" className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-[9px] md:text-[13px] lg:text-[20px]">Maximum resistance to <br/> virus penetration:</h3>
              <p className='text-[9px] md:text-[13px] lg:text-[20px]' >Level 4 AAMI PB70</p>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 text-center'>
          <div  >
              <div className="bg-[#4E88B0] p-4 rounded-[5px] inline-block mb-2">
                <img src="/assets/features/desinfection.svg" alt="Icon 3" className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-[9px] md:text-[13px] lg:text-[20px]">Easy disinfection:</h3>
              <p className='text-[9px] md:text-[13px] lg:text-[20px]' >between washes with integrating existing <br/> laundry systems</p>
            </div>
            <div>
              <div className="bg-[#4E88B0] p-4 rounded-[5px] inline-block mb-2">
                <img src="/assets/features/breathable.svg" alt="Icon 4" className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-[9px] md:text-[13px] lg:text-[20px]">Highly breathable</h3>
              <p></p>
            </div>
            <div>
              <div className="bg-[#4E88B0] p-4 rounded-[5px] inline-block mb-2">
                <img src="/assets/features/water.svg" alt="Icon 5" className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-[9px] md:text-[13px] lg:text-[20px]">Excellent water repellency</h3>
              <p className='text-[9px] md:text-[13px] lg:text-[20px]' >and resistance to liquid <br/> penetration</p>
            </div>
          </div>
          </div>
          <div className="mt-8">
            <button className="bg-[#95BC67]  py-4 px-8 rounded-3xl hover:bg-green-600 transition text-[14px] md:text-[22px] lg:text-[28px]">
              Discover Our Technology
            </button>
          </div>
        </div>
      );
}

export default Features