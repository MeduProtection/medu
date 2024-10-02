import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from '@/Context/AppContext';

function OnlyMedical() {
    const { traduccion } = useContext(AppContext);

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
            className='absolute w-[159px] md:w-[252px] lg:w-[200px] h-[137px] md:h-[217px] lg:h-[140px] xl:w-[218px] xl:h-[173px]  flex  justify-center items-center text-[#5587B6] bg-[rgba(242,247,250,0.50)] shadow-md backdrop-blur-[2px] -bottom-20  lg:top-64 xl:top-72 md:right-20 lg:-right-20  right-4 rounded-[20px] leading-[30px]  md:leading-[40px] lg:leading-[35px] '
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            <p className='text-[#5587B6]  text-[20px] md:text-[24px] text-center '>
                <span className=''>
                {traduccion.ourProducts.cards.wash.description[0]}
                    </span>
                    <br/>
                <span className='text-[36px] md:text-[55px] lg:text-[40px] font-bold'>50 <br/> {traduccion.ourProducts.cards.wash.description[1]} <br/> </span>
            </p>
        </motion.div>
    )
}

export default OnlyMedical