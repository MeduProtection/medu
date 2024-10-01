import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from '@/Context/AppContext';

function Savings() {
    const variants = {
        hidden: { x: 300, opacity: 0 },
        visible: { 
          x: 0, 
          opacity: 1, 
          transition: { delay: 2.5 } 
      },
  
    }

    const { traduccion } = useContext(AppContext);

    return (
        <motion.div
            className='absolute w-[152px] h-[60px] md:w-[233px] md:h-[92px] flex  justify-center items-center text-[#1B3954] bg-[rgba(242,247,250,0.50)] shadow-md backdrop-blur-[2px] top-32 md:top-44 lg:top-8 xl:top-16 md:right-20 lg:-right-10  right-0 rounded-[20px]'
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            <p className='text-[#1B3954] font-bold text-[10px] md:text-[16px] leading-[15px] '>
                {traduccion.home.heroCards[1].title[0]} <span className='text-[36px] md:text-[55px]'>80% </span><br/> {traduccion.home.heroCards[1].title[1]} 
            </p>
        </motion.div>
    )
}

export default Savings