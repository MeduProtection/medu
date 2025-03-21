import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AppContext } from '@/Context/AppContext';



function Gowns() {
  const { traduccion } = useContext(AppContext);

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
    <div className='container mx-auto flex flex-col lg:flex-row items-center xl:px-8 mt-[50px] lg:mt-[116px]   '>
        <div className='w-full h-full flex flex-col justify-center items-center '>
                <h1 className='w-full text-[#1B3954] text-[65px] lg:text-[85px] leading-[70px] lg:leading-[86px] text-center lg:text-left lg:pl-[100px] xl:pl-[150px] 2xl:pl-[200px] mb-4 '>
                    {traduccion.ourProducts.gowns.heading.title[0]}<br/> <span className='text-[#4E88B0]'>{traduccion.ourProducts.gowns.heading.title[1]}</span>
                </h1>

                <div
                {...handlers}
                className='w-[80%] md:w-[336px] h-[334px] flex flex-row justify-center items-center relative '
                >
                  <div className='absolute left-8 top-0 bottom-0 my-auto w-[50px] h-[50px] rounded-full bg-white/70 flex justify-center items-center cursor-pointer' onClick={() => setCarrouselImage(prev => (prev - 1 + 8) % 8)}>
                  <FaArrowLeft className='w-[80%] md:w-[336px]' alt="left arrow" />

                  </div>

                  <div className='absolute right-8 top-0 bottom-0 my-auto w-[50px] h-[50px] rounded-full bg-white/70 flex justify-center items-center cursor-pointer' onClick={() => setCarrouselImage(prev => (prev - 1 + 8) % 8)}>
                  <FaArrowRight className='w-[80%] md:w-[336px]' alt="right arrow" />
                  </div>
                  

                <Image
                
                src={`/assets/OurProducts/Gown/${carrouselImage}.jpg`} width={336} height={334} className='w-full h-full rounded-[30px] object-cover ' alt="MEDU Gowns" />
                </div>


                <div className='w-[334px] h-[87px] rounded-[34px] border-2 px-[30px] flex text-[24px] leading-[28px] items-center mt-8 mb-[16px]'>
                {traduccion.ourProducts.gowns.description.level} <br/>
                {traduccion.ourProducts.gowns.description.sublevel}
                </div>
                <div className='w-[334px] h-[325px] rounded-[34px] border-2 px-[30px] flex flex-col text-[24px] leading-[28px] justify-center gap-[30px]'>
                    <p className='text-[18px] leading-[22px] uppercase'>{traduccion.ourProducts.gowns.description.protection}</p>
                    <div className='flex gap-[25px]'>
                        <div className='rounded-full w-[56px] h-[56px] colorShadow bg-white'/>
                        <div className='rounded-full w-[56px] h-[56px] colorShadow bg-[#5FD9CB]'/>
                        <div className='rounded-full w-[56px] h-[56px] colorShadow bg-[#4E88B0]'/>
                    </div>
                    <p className='tracking-wide text-[24px]'>{traduccion.ourProducts.gowns.description.sizes}</p>
                </div>
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center '>
        <div className='h-full w-[429px] flex flex-col justify-start lg:justify-center   relative '>
      
      <div className="  flex flex-row justify-center   ">
        
        
      <model-viewer
  className="center-block relative "
  style={{ width: "100%", height: height, overflow:"visible" }} 
  src={`/assets/OurProducts/Gown.glb`}
  ar
  ar-modes="webxr scene-viewer quick-look"
  camera-controls
  poster="poster.webp"
  shadow-intensity="1.98"
  exposure="0.86"
  shadow-softness="0.97"
  auto-rotate
  camera-target="0m 1m 0m"
  min-camera-orbit="auto 87deg auto"
  max-camera-orbit="auto 101deg auto"
>
  <button
    className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 bg-[#1B3954] text-white py-2 px-4 md:py-2 md:px-8 rounded-full transition text-[14px] md:text-[22px] xl:text-[28px] flex items-center gap-2 lg:hidden z-40"
   slot='ar-button'
  >
    <Image src="/assets/icons/ar.svg" width={24} height={24} alt="ar icon" />
    {traduccion.ourProducts.gowns.buttons.arView}
  </button>
</model-viewer>




          
      </div>
    </div>        
        

     
        </div>
    </div>
  )
}

export default Gowns