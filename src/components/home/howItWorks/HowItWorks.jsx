import React from 'react'

function HowItWorks() {
    return (
      <div className="container mx-auto flex flex-wrap  md:flex-nowrap">
        <div className="w-full flex flex-col lg:flex-row items-center py-12 px-4 lg:px-12 bg-white">
          <div className=" max-w-lg">
            <h2 className="text-[53px] font-bold mb-4 text-center text-[#1B3954]">
              How it <span className="text-[#5587B6]">works</span>.
            </h2>
            <p className="text-[#5587B6] mb-4 font-bold text-[23px] max-w-lg">
              Reducing the cost of protective gowns by up to 80% while ensuring health and safety may sound too good to be true. But it isn’t.
            </p>
            <p className="mb-8 text-[21px] max-w-lg">
              Our patent-pending, anti-viral, anti-bacterial fabric can be washed up to 50 times with conventional hospital system detergents and equipment without losing protective properties and prevents cross-contamination, enabling caregivers to dramatically reduce gown changes.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <div className="relative">
              <img src="/assets/works/poster.png" alt="How it works" className="max-w-full h-auto rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-75 p-4 rounded-full">
                  <svg className="h-12 w-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
}

export default HowItWorks