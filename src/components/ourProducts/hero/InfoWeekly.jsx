import React from 'react'
import { motion } from 'framer-motion'


function InfoWeekly() {
    const variants = {
        hidden: { x: 300, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1, 
            transition: { delay: 2.5 } 
        },
    }
  return (
    <motion.div
        className='absolute w-[159px] md:w-[252px] lg:w-[200px] h-[137px] md:h-[217px] lg:h-[140px] xl:w-[218px] xl:h-[173px]  flex flex-col justify-center items-center text-[#1B3954] bg-[rgba(242,247,250,0.50)] shadow-md backdrop-blur-[2px] -bottom-20 lg:-bottom-28 left-4 md:left-12  lg:left-auto lg:right-[120px] rounded-[20px] px-4 leading-[30px] md:leading-[40px] lg:leading-[30px] xl:leading-[40px]'
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
    >
        <h3 className='font-black text-[#1B3954] text-[40px] md:text-[55px] lg:text-[30px] xl:text-[55px] text-left'>
       10
        </h3>
        <h3 className='font-black text-[#1B3954] text-[40px] md:text-[55px] lg:text-[30px] xl:text-[55px] text-left'>
       hours
        </h3>
        <p className='text-[18px] md:text-[24px] leading-[20px] mt-2 text-[#1B3954] '>
        weekly time
        </p>
        <p className='text-[18px] md:text-[24px]  text-[#1B3954] '>
        savings
        </p>

       
    </motion.div>
)
}

export default InfoWeekly