import React, { useContext } from 'react'
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion'
import { AppContext } from '@/Context/AppContext';


function Features() {

  const { traduccion } = useContext(AppContext);

  const [ref, inView] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }
  }
    return (
        <div ref={ref} className="flex flex-col items-center py-12 bg-[#1B3954] text-white">
          <motion.h2
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className=" text-[18px] md:text-[21px] font-bold mb-4 text-center text-[#95BC67]  ">
            {traduccion.home.features.heading[0]} <br className='lg:hidden'/> {traduccion.home.features.heading[1]}
          </motion.h2>
          <motion.p 
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className="text-center mb-4 max-w-md lg:max-w-4xl text-[10px] md:text-[17px] lg:text-[20px] px-10">
            {traduccion.home.features.subheading}
            
          </motion.p>
          <motion.p 
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className="text-center mb-8 max-w-lg  lg:max-w-4xl text-[10px] md:text-[17px] lg:text-[20px] px-10">
          {traduccion.home.features.description}
            
          </motion.p>
          <div className='w-full flex flex-col items-center'>
            
          <motion.div
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-36 text-center mb-8 mt-8">
            <div>
              <div className="bg-[#4E88B0] p-4 rounded-[5px] inline-block mb-2">
                <img src="/assets/features/highest.svg" alt="Icon 1" className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-[9px] md:text-[13px] lg:text-[20px]">  {traduccion?.home?.features.items[0]?.title[0]} <br/> {traduccion?.home?.features.items[0]?.title[1]}</h3>
              <p className='text-[9px] md:text-[13px] lg:text-[20px]' >{traduccion?.home?.features.items[0]?.description}</p>
            </div>
            <div>
              <div className="bg-[#4E88B0] p-4 rounded-[5px] inline-block mb-2">
                <img src="/assets/features/features.svg" alt="Icon 2" className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-[9px] md:text-[13px] lg:text-[20px]">{traduccion?.home?.features.items[1]?.title[0]} <br/> {traduccion?.home?.features.items[1]?.title[1]}</h3>
              <p className='text-[9px] md:text-[13px] lg:text-[20px]' >{traduccion?.home?.features.items[1]?.description}</p>
            </div>
          </motion.div>
          <motion.div
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 text-center'>
          <div  >
              <div className="bg-[#4E88B0] p-4 rounded-[5px] inline-block mb-2">
                <img src="/assets/features/desinfection.svg" alt="Icon 3" className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-[9px] md:text-[13px] lg:text-[20px]">{traduccion?.home?.features.items[2]?.title}</h3>
              <p className='text-[9px] md:text-[13px] lg:text-[20px]' >{traduccion?.home?.features.items[2]?.description[0]} <br/> {traduccion?.home?.features.items[2]?.description[1]}</p>
            </div>
            <div>
              <div className="bg-[#4E88B0] p-4 rounded-[5px] inline-block mb-2">
                <img src="/assets/features/breathable.svg" alt="Icon 4" className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-[9px] md:text-[13px] lg:text-[20px]">{traduccion?.home?.features.items[3]?.title}</h3>
              <p></p>
            </div>
            <div>
              <div className="bg-[#4E88B0] p-4 rounded-[5px] inline-block mb-2">
                <img src="/assets/features/water.svg" alt="Icon 5" className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-[9px] md:text-[13px] lg:text-[20px]">{traduccion?.home?.features.items[4]?.title}</h3>
              <p className='text-[9px] md:text-[13px] lg:text-[20px]' >{traduccion?.home?.features.items[4]?.description[0]} <br/> {traduccion?.home?.features.items[4]?.description[1]}</p>
            </div>
          </motion.div>
          </div>
          <div className="mt-8">
            <button className="bg-[#95BC67]  py-4 px-8 rounded-3xl hover:bg-green-600 transition text-[14px] md:text-[22px] lg:text-[28px]">
            {traduccion?.home?.features.button}
            </button>
          </div>
        </div>
      );
}

export default Features