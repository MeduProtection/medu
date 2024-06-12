import React from 'react'

function WasteEctomy() {
    return (
      <div className="container mx-auto flex flex-wrap  md:flex-nowrap">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between py-12 px-4 lg:px-12 bg-white">
        <div className=" max-w-lg">
            <h2 className="text-[22px] md:text-[37px] md:leading-[37px] lg:leading-[52px] lg:text-[50px] font-bold mb-4 text-[#1B3954] text-center lg:text-start ">
              Give your hospital  <br/> a <span className="text-[#4E88B0]"> waste-ectomy.</span>
            </h2>
            <p className="mb-4 lg:mb-8 max-w-md md:max-w-lg text-[10px] md:text-[17px] lg:text-[20px] text-center lg:text-start">
              Medical waste is a 5,000,000-ton, 935 billion-dollar problem, compromising public health and creating significant financial strain on healthcare systems. Medu’s innovative medical gowns and coveralls offer an unparalleled ability to increase savings, while dramatically reducing landfill waste. After all, the planet deserves a long, healthy life, too.
            </p>
            <div className="space-y-4 md:space-y-0 text-center lg:text-start text-[#1B3954] font-bold" >
              <p className="text-[12px] lg:text-[16px] font-bold">
                up to <span className="text-[44px] md:text-[55px] text-[#95BC67] ">80%</span> cost savings
              </p>
              <p className=" text-[12px] md:text-[16px] font-bold">
                up to <span className="text-[44px] md:text-[55px] text-[#4E88B0]">90%</span> waste reduction
              </p>
              <p className=" text-[12px] md:text-[16px] font-bold">
                up to <span className="text-[44px] lg:text-[55px]">10 hrs</span> hrs weekly time savings
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0  ">
            <div className="relative  ">
              <img src="/assets/waste/bata.png" alt="Medical Gown" className="max-w-full h-[70%]  " />
              
            </div>
          </div>
        </div>
        </div>
      );
}

export default WasteEctomy