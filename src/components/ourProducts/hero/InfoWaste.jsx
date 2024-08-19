import React from 'react'
import { motion } from 'framer-motion'

function Waste() {
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
            className='absolute w-[159px] md:w-[252px] lg:w-[170px] h-[137px] md:h-[217px] lg:h-[140px] xl:w-[218px] xl:h-[173px]  flex  justify-center items-center text-[#1B3954] bg-[rgba(242,247,250,0.50)] shadow-md backdrop-blur-[2px] top-32 md:top-44 lg:top-8 xl:top-0 md:right-20 lg:-right-10  right-0 rounded-[20px]'
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            <p className='text-[#1B3954]  text-[20px] md:text-[24px] leading-[40px] text-center '>
                <span className='text-[36px] md:text-[55px] font-bold'>90% </span><br/> waste <br/> reduction
            </p>
        </motion.div>
    )
}

export default Waste