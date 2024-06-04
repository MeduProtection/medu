import React from 'react'

function WasteEctomy() {
    return (
        <div className="flex flex-col lg:flex-row items-center py-12 px-4 lg:px-12 bg-white">
          <div className="lg:w-1/2">
            <h2 className="text-[50px] font-bold mb-4">
              Give your hospital  <br/> a <span className="text-blue-600"> waste-ectomy.</span>
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
              <img src="/image.png" alt="Medical Gown" className="max-w-full h-auto" />
              <p className="absolute bottom-0 right-0 mb-4 mr-4 text-gray-600">360° view</p>
            </div>
          </div>
        </div>
      );
}

export default WasteEctomy