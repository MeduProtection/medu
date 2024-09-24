import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';



function Surgical() {
    const [height, setHeight] = useState("1500px");
    const [carrouselImage, setCarrouselImage] = useState(0);

    useEffect(() => {
      const updateHeight = () => {
        if (window.innerWidth <= 768) { // Ajusta el ancho según el tamaño de pantalla deseado
          setHeight("500px");
        } else {
          setHeight("900px");
        }
      };
  
      window.addEventListener("resize", updateHeight);
      updateHeight(); // Llama a la función una vez para establecer el valor inicial
  
      return () => window.removeEventListener("resize", updateHeight);
    }, []);

    const handlers = useSwipeable({
      onSwipedLeft: () => setCarrouselImage(prev => (prev + 1) % 8),
      onSwipedRight: () => setCarrouselImage(prev => (prev - 1 + 8) % 8),
    });

  return (
    <div className='container mx-auto flex flex-col  items-center xl:px-8 mt-[50px] lg:mt-[116px]   '>
        <div className='w-full h-full flex flex-col justify-center items-center '>
                <h1 className='w-full text-[#1B3954] text-[65px] lg:text-[85px] leading-[70px] lg:leading-[86px] text-center mb-4 lg:mb-0'>
                    MEDU <br/> <span className='text-[#4E88B0]'>Surgical
                      <br/> Packages</span>
                </h1>

                <div
                {...handlers}
                className='w-[80%] md:w-[336px] h-[334px] flex flex-row justify-center items-center relative '
                >
                 {/*  <div className='absolute left-8 top-0 bottom-0 my-auto w-[50px] h-[50px] rounded-full bg-white/70 flex justify-center items-center cursor-pointer' onClick={() => setCarrouselImage(prev => (prev - 1 + 8) % 8)}>
                  <FaArrowLeft className='w-[80%] md:w-[336px]' alt="left arrow" />

                  </div>

                  <div className='absolute right-8 top-0 bottom-0 my-auto w-[50px] h-[50px] rounded-full bg-white/70 flex justify-center items-center cursor-pointer' onClick={() => setCarrouselImage(prev => (prev - 1 + 8) % 8)}>
                  <FaArrowRight className='w-[80%] md:w-[336px]' alt="right arrow" />
                  </div> */}
                  

                <Image
                
                src={`/assets/OurProducts/Surgical/Bulto.png`} width={336} height={334} className='w-full h-full rounded-[30px] object-cover ' alt="MEDU Gowns" />
                </div>

                <div className='w-[334px] h-[286px] rounded-[34px] border-2 px-[30px] flex flex-col text-[24px] leading-[28px] justify-center gap-[30px] my-[35px]'>
                    <p className='text-[18px] leading-[22px] uppercase'>Our comprehensive surgical packs provide sterilized garments for efficient and safe procedures. Ask about the different surgical packages.</p>
                    <div className='flex gap-[25px]'>
                        <div className='rounded-full w-[56px] h-[56px] colorShadow bg-[#4E88B0]'/>
                    </div>
                </div>
        </div>
       
    </div>
  )
}

export default Surgical