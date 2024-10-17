import React, { useContext, useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion'
import { AppContext } from '@/Context/AppContext';
import Image from 'next/image';

function WasteEctomy() {

  const { traduccion } = useContext(AppContext);

  const [ref, inView] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1 } },
  };

  const [height, setHeight] = useState("1500px");

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

  return (
    <motion.div
    ref={ref}
      className="container mx-auto flex flex-wrap md:flex-nowrap"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between py-12 px-4 lg:px-12 bg-white">
        <motion.div className="max-w-xl" variants={textVariants}>
          <h2 className="text-[22px] md:text-[37px] md:leading-[37px] lg:leading-[52px] lg:text-[50px] font-bold mb-4 text-[#1B3954] text-center lg:text-start">
            {traduccion.home.wasteEctomy.heading[0]} <br /> {traduccion.home.wasteEctomy.heading[1]}{' '}
            <span className="text-[#4E88B0]"> {traduccion.home.wasteEctomy.heading[2]}</span>
          </h2>
          <p className="mb-4 lg:mb-8 max-w-md md:max-w-lg text-[10px] md:text-[17px] lg:text-[20px] text-center lg:text-start">
          {traduccion.home.wasteEctomy.description}
          </p>
          <div className="space-y-4 md:space-y-0 text-center lg:text-start text-[#1B3954] font-bold">
            <motion.p className="text-[12px] lg:text-[16px] font-bold" variants={textVariants}>
            {traduccion.home.wasteEctomy.savings[0].text}<span className="text-[44px] md:text-[55px] text-[#95BC67] ">80%</span> {traduccion.home.wasteEctomy.savings[0].description}
            </motion.p>
            <motion.p className="text-[12px] md:text-[16px] font-bold" variants={textVariants}>
            {traduccion.home.wasteEctomy.savings[1].text} <span className="text-[44px] md:text-[55px] text-[#4E88B0]">90%</span> {traduccion.home.wasteEctomy.savings[1].description}
            </motion.p>
            <motion.p className="text-[12px] md:text-[16px] font-bold" variants={textVariants}>
            {traduccion.home.wasteEctomy.savings[2].text} <span className="text-[44px] lg:text-[55px]">10 hrs</span> {traduccion.home.wasteEctomy.savings[2].description}
            </motion.p>
          </div>
        </motion.div>
        <motion.div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 " variants={imageVariants}>
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

        </motion.div>
      </div>
    </motion.div>
  );
}

export default WasteEctomy;