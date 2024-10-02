import React, { useContext, useState } from "react";
import MenuIcon from "./icons/MenuIcon";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { AppContext } from "@/Context/AppContext";

function Navbar() {
  const { traduccion, idioma, setIdioma } = useContext(AppContext);
  const [active, setActive] = useState(false);
  const router = useRouter();
  return (
    <>
      <nav className="hidden xl:block bg-white px-4 py-2 fixed z-50 w-full ">
        <div className="container mx-auto flex flex-wrap items-center justify-between bg-[#1B3954] rounded-[30px] lg:rounded-[98px] py-8 lg:px-20">
          <Link href="/" className="flex items-center">
            <Image
              width={130}
              height={56}
              src="/assets/navbar/logo.png"
              alt="Logo"
              className="mr-3 h-10 object-contain"
            />
          </Link>
          <div className="flex md:order-2 gap-4">
            {/*  <button className="hidden lg:block text-[#1B3954] bg-white   font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0">
              I&apos;m a Distributor
            </button> */}
            <button
              className="text-white hidden lg:block bg-[#95BC67] hover:bg-[#059669]  font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
              onClick={() => router.push("/ContactUs")}
            >
              {traduccion.navbar.links.contact_us}
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
                <Link
                  href="/OurProducts"
                  className="block py-2 pr-4 pl-3 text-white hover:text-[#95BC67] text-[16px] rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                                {traduccion.navbar.links.our_products}
                </Link>
              </li>
              <li>
                <Link
                  href="HowItWorks"
                  className="block py-2 pr-4 pl-3 text-white hover:text-[#95BC67] text-[16px] rounded md:bg-transparent md:p-0"
                >
                                {traduccion.navbar.links.how_it_works}

                </Link>
              </li>

              <li>
                <Link
                  href="/Industries"
                  className="block py-2 pr-4 pl-3 text-white hover:text-[#95BC67] text-[16px] rounded md:bg-transparent md:p-0"
                >
                                {traduccion.navbar.links.industries}

                </Link>
              </li>
              <li>
                <Link
                  href="/AboutUs"
                  className="block py-2 pr-4 pl-3 text-white hover:text-[#95BC67] text-[16px] rounded md:bg-transparent md:p-0"
                >
                                {traduccion.navbar.links.about_us}

                </Link>
              </li>
              <li className="text-white text-[16px]">
                  <span className={`${idioma.nombre == "EN" && "text-[#95BC67]"} cursor-pointer hover:text-[#95BC67] `}
                  onClick={
                    () => {
                      setIdioma({
                        nombre: 'EN',
                        code: 'US',
                      });
                    }
                  }
                  >EN</span> / <span
                  onClick={
                    () => {
                      setIdioma({
                        nombre: 'ES',
                        code: 'MX',
                      });
                    }
                  }
                  className={`${idioma.nombre == "ES" && "text-[#95BC67]"} cursor-pointer hover:text-[#95BC67] `}>ES</span>
                </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav
        className={`flex flex-col xl:hidden fixed z-50 w-full 
      ${active ? "bg-[#1B3954] " : "bg-white"}
      `}
      >
        <div className="flex justify-around">
          {!active ? (
            <Link href="/">
            <Image
              width={116}
              height={116}
              src="/assets/navbar/logoSM.png"
              alt="logo"
              className="h-[116px] w-[116px] mr-3"
            />
            </Link>
          ) : (

            <Link href="/">
            <Image
              width={116}
              height={116}
              src="/assets/navbar/logo.png"
              alt="logo"
              className="h-[116px] w-[116px] object-contain mr-3"
            />
            </Link>
          )}

          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center  text-sm  rounded-lg xl:hidden  "
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            {!active ? (
              <Image
                alt="Hamburguer"
                width={35}
                height={21}
                src="/assets/navbar/hamburguerSM.svg"
                className="w-[35px] h-[21px] cursor-pointer"
                onClick={() => setActive(!active)}
              />
            ) : (
              <Image
                alt="Close"
                width={35}
                height={21}
                src="/assets/navbar/close.svg"
                className="w-[35px] h-[21px]"
                onClick={() => setActive(!active)}
              />
            )}
          </button>
        </div>
        {active && (
          <>
            <div className="mt-[70px]">
              <ul className="text-white text-center space-y-[25px] text-[23px]">
                <li
                onClick={() => setActive(!active)}
                >
                  <Link href={"/"}>              {traduccion.navbar.links.home}
                  </Link>
                </li>
                <li
                onClick={() => setActive(!active)}
                >
                  <Link href={"/OurProducts"}>              {traduccion.navbar.links.our_products}
                  </Link>
                </li>
                <li
                onClick={() => setActive(!active)}
                >
                  <Link href={"/HowItWorks"}>              {traduccion.navbar.links.how_it_works}
                  </Link>
                </li>
                <li
                onClick={() => setActive(!active)}
                >
                  <Link href={"/Industries"}>              {traduccion.navbar.links.industries}
                  </Link>
                </li>
                <li
                onClick={() => setActive(!active)}
                >
                  <Link href={"/AboutUs"}>              {traduccion.navbar.links.about_us}
                  </Link>
                </li>
                <li>
                  <span className={`${idioma.nombre == "EN" && "text-[#95BC67]"} cursor-pointer hover:text-[#95BC67] `}>EN</span> / <span className={`${idioma.nombre == "ES" && "text-[#95BC67]"} cursor-pointer hover:text-[#95BC67] `}>ES</span>
                </li>
              </ul>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-[40%] flex flex-col items-center gap-y-[36px] my-8">
                {/*  <button className=" text-[#1B3954] bg-white   font-medium rounded-3xl text-sm px-5 py-2.5 text-center lg:mr-3 md:mr-0">
                    I&apos;m a Distributor
                  </button> */}
                  <Link href={"/ContactUs"}>
                <button
                  className="text-white  bg-[#95BC67] hover:bg-[#059669]  font-medium rounded-3xl text-sm px-5 py-2.5 text-center lg:mr-3 md:mr-0"
                  onClick={() => setActive(!active)}
                >
                                {traduccion.navbar.links.contact_us}

                </button>
                </Link>
              </div>
            </div>
            <div className="border-t border-[#82BE62] lg:border-[#5587B6] my-6 pt-4 flex flex-col-reverse xl:flex-row justify-between items-center text-center xl:text-start">
              <p className="text-sm text-gray-400 mt-4 lg:mt-0">
                {traduccion.navbar.footer.copyright}
              </p>
              <div className="lg:hidden flex justify-center gap-[55px] my-2">
                <Link href={"https://www.facebook.com/meduprotection"} target="_blank" rel="noopener noreferrer">
                <Image
                  width={20}
                  height={20}
                  src="/assets/footer/fb.svg"
                  alt="Facebook"
                  className="h-[20px] w-[20px]"
                />
                </Link>
                <Link href={"https://www.instagram.com/meduprotection"} target="_blank" rel="noopener noreferrer">
                <Image
                  width={20}
                  height={20}
                  src="/assets/footer/ig.svg"
                  alt="Facebook"
                  className=""
                />
                </Link>
                <Link
        href="https://wa.me/1234567890?text=Hola%20me%20gustaría%20saber%20más%20sobre%20sus%20productos"
        target="_blank"
        rel="noopener noreferrer"
      >
                <Image
                  width={20}
                  height={20}
                  src="/assets/footer/phone.svg"
                  alt="Facebook"
                  className=""
                />
                </Link>
                <Link href="mailto:meduprotection@gmail.com">
                <Image
                  width={20}
                  height={20}
                  src="/assets/footer/email.svg"
                  alt="Facebook"
                  className=""
                />
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}

export default Navbar;
