import React from 'react'

function Footer() {
    return (
        <footer className="bg-[#1B3954] text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col xl:flex-row justify-between items-center">
              <div className="flex  items-center space-x-4">
                <img className="h-8 w-auto md:w-[133px] md:h-[58px]" src="/assets/navbar/logo.png" alt="Medu Logo" />
                
              </div>
              <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0  xl:space-x-8 mt-4 xl:mt-0 items-center md:text-[27px] xl:text-[16px]">
                <a href="#" className="hover:text-gray-400">Our Products</a>
                <a href="#" className="hover:text-gray-400">How it works</a>
                <a href="#" className="hover:text-gray-400">Industries</a>
                <a href="#" className="hover:text-gray-400">Insights</a>
                <a href="#" className="hover:text-gray-400">About Us</a>
                <button className="bg-white text-blue-900 py-2 px-4 rounded-full hover:bg-gray-100 transition md:text-[20px]">
                  I&apos;m a Distributor
                </button>
              </div>
            </div>
            <div className="border-t border-[#82BE62] lg:border-[#5587B6] mt-6 pt-4 flex flex-col-reverse lg:flex-row justify-between items-center text-center lg:text-start">
              <p className="text-sm text-gray-400 mt-4 lg:mt-0">&copy; 2024 Medu Protection</p>
              
              <div className="flex flex-col lg:flex-row space-y-4 md:space-y-[30px] lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0 ">
                <a href="#" className="text-sm md:text-[20px] xl:text-[16px] text-gray-400 hover:text-gray-300">Terms</a>
                <a href="#" className="text-sm md:text-[20px] xl:text-[16px] text-gray-400 hover:text-gray-300">Privacy</a>
                <a href="#" className="text-sm md:text-[20px] xl:text-[16px] text-gray-400 hover:text-gray-300">Cookies</a>
              </div>
              <div className='lg:hidden flex justify-center gap-[55px] md:gap-[117px] my-2'>
                <img src="/assets/footer/fb.svg" alt="Facebook" className="md:w-[32px] md:h-[52px]" />
                <img src="/assets/footer/ig.svg" alt="IG" className="md:w-[52px] md:h-[60px]" />
                <img src="/assets/footer/phone.svg" alt="Phone" className="md:w-[56px] md:h-[54px]" />
                <img src="/assets/footer/email.svg" alt="Mail" className="md:w-[61px] md:h-[46px]" />

              </div>
            </div>
          </div>
        </footer>
      );
}

export default Footer