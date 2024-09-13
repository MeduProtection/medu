import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Footer() {
    return (
        <footer className="bg-[#1B3954] text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col xl:flex-row justify-between items-center">
              <div className="flex  items-center space-x-4">
                <Image
                width={133}
                height={58}
                className="h-8 w-auto md:w-[133px] md:h-[58px]" src="/assets/navbar/logo.png" alt="Medu Logo" />
                
              </div>
              <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0  xl:space-x-8 mt-4 xl:mt-0 items-center md:text-[27px] xl:text-[16px]">
                
                <Link href={"/OurProducts"}>
                <span  className="hover:text-gray-400">Our Products</span>
                </Link>
                <Link href={"/HowItWorks"}>
                <span  className="hover:text-gray-400">How it works</span>
                </Link>
                <Link href={"/Industries"}>
                <span  className="hover:text-gray-400">Industries</span>
                </Link>
                <Link href={"/AboutUs"}>
                <span  className="hover:text-gray-400">About Us</span>
                </Link>
                <button className="bg-white text-blue-900 py-2 px-4 rounded-full hover:bg-gray-100 transition md:text-[20px]">
                  I&apos;m a Distributor
                </button>
              </div>
            </div>
            <div className="border-t border-[#82BE62] lg:border-[#5587B6] mt-6 pt-4 flex flex-col-reverse lg:flex-row justify-between items-center text-center lg:text-start">
              <p className="text-sm text-gray-400 mt-4 lg:mt-0">&copy; 2024 Medu Protection</p>
              
              <div className="flex flex-col lg:flex-row space-y-4 md:space-y-[30px] lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0 ">
                <Link href={"/"}>
                <span  className="text-sm md:text-[20px] xl:text-[16px] text-gray-400 hover:text-gray-300">Terms</span>
                </Link>
                <Link href={"/"}>
                <span  className="text-sm md:text-[20px] xl:text-[16px] text-gray-400 hover:text-gray-300">Privacy</span>
                </Link>
                <Link href={"/"}>
                <span  className="text-sm md:text-[20px] xl:text-[16px] text-gray-400 hover:text-gray-300">Cookies</span>
                </Link>
              </div>
              <div className='lg:hidden flex justify-center items-center gap-[55px] md:gap-[117px] my-2'>
              <Link href={"https://www.facebook.com/meduprotection"} target="_blank" rel="noopener noreferrer">
              <Image width={32} height={52} src="/assets/footer/fb.svg" alt="Facebook" className="w-[30px] h-[30px] md:w-[32px] md:h-[35px] lg:h-[52px]" />
              </Link>
              <Link href={"https://www.instagram.com/meduprotection"} target="_blank" rel="noopener noreferrer">
                <Image width={52} height={60} src="/assets/footer/ig.svg" alt="IG" className="w-[30px] h-[50px] md:w-[52px] md:h-[35px] lg:h-[60px]" />
              </Link>
              <Link
        href="https://wa.me/1234567890?text=Hola%20me%20gustaría%20saber%20más%20sobre%20sus%20productos"
        target="_blank"
        rel="noopener noreferrer"
      >
                <Image width={56} height={54} src="/assets/footer/phone.svg" alt="Phone" className="w-[30px] h-[50px] md:w-[56px] md:h-[35px] lg:h-[54px]" />
              </Link>
              <Link href="mailto:meduprotection@gmail.com">
                <Image width={61} height={46} src="/assets/footer/email.svg" alt="Mail" className="w-[30px] h-[50px] md:w-[61px] md:h-[35px] lg:h-[46px]" />
              </Link>

              </div>
            </div>
          </div>
        </footer>
      );
}

export default Footer