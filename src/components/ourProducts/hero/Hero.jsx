import React from 'react'
import { motion } from 'framer-motion'
import InfoCost from './InfoCost'
import InfoWeekly from './InfoWeekly'
import InfoWaste from './InfoWaste'
import InfoWash from './InfoWash'

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1 } }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { 
            opacity: { duration: 0.5, delay: 1.5 },
            scale: { duration: 0.5, delay: 1.5 }
        } 
    }
}

  return (
    <motion.header
      className="py-32 xl:py-36 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <img
        src="/assets/shadows/blue.svg"
        alt="shadow"
        className="absolute w-[1051px] h-[1550px] top-[00px] right-0 -z-10"
      />
      <div className="container mx-auto flex flex-col lg:flex-row items-center xl:px-8">
        <div className="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-start px-4">
          <motion.h1
            className="text-[28px] md:text-[45px] xl:text-[55px] font-bold leading-tight text-[#1B3954]  mb-4"
            variants={textVariants}
          >
            Save <span className='text-[#95BC67]'> more </span>
          </motion.h1>
          <motion.p
            className="max-w-[275px] md:max-w-md  lg:max-w-full mb-4 text-gray-700 text-[10px] md:text-[17px] xl:text-[21px]"
            variants={textVariants}  
          >
            With Medu medical gowns, you save up to <span className='text-[#1B3954] text-[32px] font-bold'>80%</span> over typical PPE coverings. You also save the planet from landfill-clogging medical waste and preserve valuable time that saves lives.
          </motion.p>
          <motion.p
            className="max-w-sm lg:max-w-full mb-8 font-bold text-[#5587B6] text-[10px] md:text-[17px] xl:text-[21px]"
            variants={textVariants}
          >
            1 Medu gown replaces 450+ disposable gowns
          </motion.p>
          
        </div>
        <div className="w-full  px-4 flex justify-center mt-8 lg:mt-0 lg:justify-end items-center relative ">
          {/* Aqui van las cositas de encima */}
          <InfoCost/>
          <InfoWeekly/>
          <InfoWaste/>
          
          <InfoWash/>
           
          <motion.img
            src="/assets/OurProducts/Hero/heroFoto.png"
            alt="Antiviral Gown"
            className="w-full md:w-[534px] lg:w-[1000px]  object-cover"
            variants={imageVariants}
          />
        </div>
      </div>
      <div className="flex justify-center mt-10 ">
       
      </div>
    </motion.header>
  )
}

export default Hero