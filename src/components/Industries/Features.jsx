import React from 'react'
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion'


function Features() {

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
              <h3 className="font-semibold text-[13px] lg:text-[20px]">Highest level of user <br/> protection:</h3>
              <p className='text-[13px] lg:text-[20px]' >Level 4 AAMI PB70</p>
            </div>
            <div className='w-[284px] h-[284px] bg-[#1B3954] rounded-[34px] flex flex-col justify-center items-center'>
              <div className=" p-4 rounded-[5px] inline-block mb-2">
                <img src="/assets/features/features.svg" alt="Icon 2" className="h-[64px] w-[64px]" />
              </div>
              <h3 className="font-semibold text-[13px] lg:text-[20px]">Maximum resistance to <br/> virus penetration:</h3>
              <p className='text-[13px] lg:text-[20px]' >Level 4 AAMI PB70</p>
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
              <h3 className="font-semibold text-[13px] lg:text-[20px]">Highest level of user <br/> protection: </h3>
              <p className='text-[13px] lg:text-[20px]' >Level 4 AAMI PB70</p>
            </div>
            <div className='w-[284px] h-[284px] bg-[#1B3954] rounded-[34px] flex flex-col justify-center items-center'>
              <div className=" p-4 rounded-[5px] inline-block mb-2">
                <img src="/assets/features/breathable.svg" alt="Icon 4" className="h-[64px] w-[64px]" />
              </div>
              <h3 className="font-semibold text-[13px] lg:text-[20px]">Highly<br/> breathable</h3>
              <p></p>
            </div>
            <div className='w-[284px] h-[284px] bg-[#1B3954] rounded-[34px] flex flex-col justify-center items-center'>
              <div className=" p-4 rounded-[5px] inline-block mb-2">
                <img src="/assets/features/water.svg" alt="Icon 5" className="h-[64px] w-[64px]" />
              </div>
              <h3 className="font-semibold text-[13px] lg:text-[20px]">Excellent water repellency</h3>
              <p className='text-[13px] lg:text-[20px]' >and resistance to liquid <br/> penetration</p>
            </div>
          </motion.div>
          </div>
          
        </div>
      );
}

export default Features