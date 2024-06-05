import React from 'react'

function WasteEctomy() {
    return (
      <div className="container mx-auto flex flex-wrap  md:flex-nowrap">
        <div className="w-full flex flex-col lg:flex-row items-center py-12 px-4 lg:px-12 bg-white">
        <div className=" max-w-lg">
            <h2 className="text-[50px] font-bold mb-4 text-[#1B3954] ">
              Give your hospital  <br/> a <span className="text-[#4E88B0]"> waste-ectomy.</span>
            </h2>
            <p className="mb-8 max-w-md text-[20px]">
              Medical waste is a 5,000,000-ton, 935 billion-dollar problem, compromising public health and creating significant financial strain on healthcare systems. Medu’s innovative medical gowns and coveralls offer an unparalleled ability to increase savings, while dramatically reducing landfill waste. After all, the planet deserves a long, healthy life, too.
            </p>
            <div className="space-y-4">
              <p className="text-[16px] font-bold">
                up to <span className="text-[55px] text-green-500 ">80%</span> cost savings
              </p>
              <p className=" text-[16px] font-bold">
                up to <span className="text-[55px] text-blue-500">90%</span> waste reduction
              </p>
              <p className=" text-[16px] font-bold">
                up to <span className="text-[55px]">10 hrs</span> hrs weekly time savings
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <div className="relative">
              <img src="/assets/waste/bata.png" alt="Medical Gown" className="max-w-full h-auto" />
              <p className="absolute bottom-0 right-0 mb-4 mr-4 text-gray-600">360° view</p>
            </div>
          </div>
        </div>
        </div>
      );
}

export default WasteEctomy