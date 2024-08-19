import React from 'react'
import { motion } from 'framer-motion'


function InfoCost() {
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
        className='absolute w-[159px] md:w-[252px] lg:w-[200px] h-[137px] md:h-[217px] lg:h-[140px] xl:w-[218px] xl:h-[173px]  flex flex-col justify-center items-center text-[#1B3954] bg-[rgba(242,247,250,0.50)] shadow-md backdrop-blur-[2px] -top-12 lg:top-auto  lg:bottom-0 left-4 md:left-12 lg:-left-20 rounded-[20px] px-4 text-center leading-[20px] md:leading-[40px] lg:leading-[40px]'
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
    >
        <h3 className='font-black text-[#95BC67] text-[45px] md:text-[55px] lg:text-[50px] xl:text-[55px] text-left'>
       80%
        </h3>
        <p className='text-[21px] md:text-[24px]  text-[#1B3954] '>
        Cost savings
        </p>
       
    </motion.div>
)
}

export default InfoCost