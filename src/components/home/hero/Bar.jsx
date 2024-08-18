import React from 'react'
import { motion } from 'framer-motion'

function Bar() {
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
            className='absolute w-[159px] md:w-[252px] lg:w-[170px] h-[137px] md:h-[217px] lg:h-[140px] xl:w-[252px] xl:h-[200px]  flex flex-col justify-center items-left text-[#1B3954] bg-[rgba(242,247,250,0.50)] shadow-md backdrop-blur-[2px] -bottom-4 lg:bottom-0 left-14 md:left-36 lg:left-auto lg:right-20 rounded-[20px] px-4'
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            <h3 className='font-bold text-white text-[9px] md:text-[14px] lg:text-[12px] xl:text-[14px] text-left'>
            Your monthly savings
            </h3>
            <p className='text-[6px] md:text-[9px] leading-[13px] text-white '>
            Chart shows savings on your investment for last month
            </p>
            <img src='/assets/hero/bars.png' alt='bar' className='w-[120px] h-[70px] md:w-[200px] md:h-[100px] lg:w-[120px] lg:h-[70px] xl:w-[200px] xl:h-[120px] object-cover '/>
        </motion.div>
    )
}

export default Bar