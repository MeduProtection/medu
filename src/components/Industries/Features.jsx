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
        <div ref={ref} className="flex flex-col items-center pt-8 lg:py-12  text-white">
         
          <div className='w-full flex flex-col items-center'>
            
          <motion.div
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className="grid grid-cols-1  lg:grid-cols-2 gap-8 lg:gap-36 text-center mb-8 mt-8">
            <div className='w-[284px] h-[284px] bg-[#1B3954] rounded-[34px] flex flex-col justify-center items-center'>
              <div className=" p-4 rounded-[5px] inline-block mb-2">
                <img src="/assets/features/highest.svg" alt="Icon 1" className="h-[64px] w-[64px]" />
              </div>
              <h3 className="font-semibold text-[13px] lg:text-[20px]">{traduccion.industries.features.items[0].title[0]} <br/> {traduccion.industries.features.items[0].title[1]}</h3>
              <p className='text-[13px] lg:text-[20px]' >{traduccion.industries.features.items[0].description}</p>
            </div>
            <div className='w-[284px] h-[284px] bg-[#1B3954] rounded-[34px] flex flex-col justify-center items-center'>
              <div className=" p-4 rounded-[5px] inline-block mb-2">
                <img src="/assets/features/features.svg" alt="Icon 2" className="h-[64px] w-[64px]" />
              </div>
              <h3 className="font-semibold text-[13px] lg:text-[20px]">{traduccion.industries.features.items[1].title[0]}<br/> {traduccion.industries.features.items[1].title[1]}</h3>
              <p className='text-[13px] lg:text-[20px]' >{traduccion.industries.features.items[1].description}</p>
            </div>
          </motion.div>
          <motion.div
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className='grid grid-cols-1 lg:grid-cols-3 gap-8 text-center'>
          <div className='w-[284px] h-[284px] bg-[#1B3954] rounded-[34px] flex flex-col justify-center items-center' >
              <div className=" p-4 rounded-[5px] inline-block mb-2">
                <img src="/assets/features/desinfection.svg" alt="Icon 3" className="h-[64px] w-[64px]" />
              </div>
              <h3 className="font-semibold text-[13px] lg:text-[20px]">{traduccion.industries.features.items[2].title[0]} <br/> {traduccion.industries.features.items[2].title[1]} </h3>
              <p className='text-[13px] lg:text-[20px]' >{traduccion.industries.features.items[2].description}</p>
            </div>
            <div className='w-[284px] h-[284px] bg-[#1B3954] rounded-[34px] flex flex-col justify-center items-center'>
              <div className=" p-4 rounded-[5px] inline-block mb-2">
                <img src="/assets/features/breathable.svg" alt="Icon 4" className="h-[64px] w-[64px]" />
              </div>
              <h3 className="font-semibold text-[13px] lg:text-[20px]">{traduccion.industries.features.items[3].title[0]}<br/> {traduccion.industries.features.items[3].title[1]}</h3>
              <p></p>
            </div>
            <div className='w-[284px] h-[284px] bg-[#1B3954] rounded-[34px] flex flex-col justify-center items-center'>
              <div className=" p-4 rounded-[5px] inline-block mb-2">
                <img src="/assets/features/water.svg" alt="Icon 5" className="h-[64px] w-[64px]" />
              </div>
              <h3 className="font-semibold text-[13px] lg:text-[20px]">{traduccion.industries.features.items[4].title}</h3>
              <p className='text-[13px] lg:text-[20px]' >{traduccion.industries.features.items[4].description[0]} <br/> {traduccion.industries.features.items[4].description[1]}</p>
            </div>
          </motion.div>
          </div>
          
        </div>
      );
}

export default Features