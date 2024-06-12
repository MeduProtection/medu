import React, { useState } from "react";
import MenuIcon from "./icons/MenuIcon";

function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <>
      <nav className="hidden lg:block bg-white px-4 py-2 ">
        <div className="container mx-auto flex flex-wrap items-center justify-between bg-[#1B3954] rounded-[30px] lg:rounded-[98px] py-8 lg:px-20">
          <a href="#" className="flex items-center">
            <img
              src="/assets/navbar/logo.png"
              alt="Logo"
              className="mr-3 h-10"
            />
          </a>
          <div className="flex md:order-2 gap-4">
            <button className="hidden lg:block text-[#1B3954] bg-white   font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0">
              I&apos;m a Distributor
            </button>
            <button className="text-white hidden lg:block bg-[#95BC67] hover:bg-[#059669]  font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0">
              Get Started
            </button>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white text-[16px] rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white text-[16px] rounded md:bg-transparent md:p-0"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white text-[16px] rounded md:bg-transparent md:p-0"
                >
                  Industries
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white text-[16px] rounded md:bg-transparent md:p-0"
                >
                  Insights
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white text-[16px] rounded md:bg-transparent md:p-0"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className={`flex flex-col lg:hidden
      ${active &&
        "bg-[#1B3954]"
      }
      `}>
        <div className="flex justify-around">
          

        {
          !active?

          <img
            src="/assets/navbar/logoSM.png"
            alt="logo"
            className="h-[116px] w-[116px] mr-3"
          />
          :
          <img
            src="/assets/navbar/logo.png"
            alt="logo"
            className="h-[116px] w-[116px] object-contain mr-3"
          />

        }

        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          className="inline-flex items-center  text-sm  rounded-lg lg:hidden  "
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          {!active ? (
            <img
              src="/assets/navbar/hamburguerSM.svg"
              className="w-[35px] h-[21px] cursor-pointer"
              onClick={() => setActive(!active)}
            />
          ) : (
            <img
              src="/assets/navbar/close.svg"
              className="w-[35px] h-[21px]"
              onClick={() => setActive(!active)}
            />
          )}
        </button>
        
        </div>
        {
          active && (
            <>
              <div className="mt-[70px]">
                <ul className="text-white text-center space-y-[25px] text-[23px]">
                  <li>Our Products</li>
                  <li>How it Works</li>
                  <li>Industries</li>
                  <li>Insights</li>
                  <li>About Us</li>
                </ul>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-[40%] flex flex-col items-center gap-y-[36px] my-8">
                  <button className=" text-[#1B3954] bg-white   font-medium rounded-3xl text-sm px-5 py-2.5 text-center lg:mr-3 md:mr-0">
                    I&apos;m a Distributor
                  </button>
                  <button className="text-white  bg-[#95BC67] hover:bg-[#059669]  font-medium rounded-3xl text-sm px-5 py-2.5 text-center lg:mr-3 md:mr-0">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="border-t border-[#82BE62] lg:border-[#5587B6] my-6 pt-4 flex flex-col-reverse lg:flex-row justify-between items-center text-center lg:text-start">
                <p className="text-sm text-gray-400 mt-4 lg:mt-0">&copy; 2024 Medu Protection</p>
                <div className="lg:hidden flex justify-center gap-[55px] my-2">
                  <img src="/assets/footer/fb.svg" alt="Facebook" className="" />
                  <img src="/assets/footer/ig.svg" alt="Facebook" className="" />
                  <img src="/assets/footer/phone.svg" alt="Facebook" className="" />
                  <img src="/assets/footer/email.svg" alt="Facebook" className="" />
                </div>
              </div>
            </>
          )
        }
      </nav>
    </>
  );
}

export default Navbar;
