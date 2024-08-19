import React from 'react'
import { motion } from 'framer-motion'


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
      className=" relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
     
      <div className="container mx-auto flex flex-col lg:flex-row items-center  pt-[50px] xl:px-8">
        <div className="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-start px-4">
          <motion.h1
            className="text-[28px] md:text-[45px] xl:text-[50px] font-bold leading-tight text-[#1B3954]  "
            variants={textVariants}
          >
           Medu for <span className='text-[#95BC67]'>medical</span>.
          </motion.h1>
          <p className="text-[18px] fotn-semibold text-[#5587B6] my-2">Levels of Protection AN SI/AAMI PB70:2012</p>
         
          <motion.p
            className="max-w-sm md:max-w-md  lg:max-w-full mb-8 md:mb-4 text-[#1B3954] text-[10px] md:text-[17px] xl:text-[21px]"
            variants={textVariants}
          >
        Tamara Chayo has always had a mind for science and a heart for people. When the young biochemical engineer witnessed a lack of personal protective equipment during the pandemic, Chayo knew something had to change–and wanted to be the one who changed it.
          </motion.p>
          <motion.p
            className="max-w-sm md:max-w-md  lg:max-w-full mb-8 md:mb-4 text-[#1B3954] text-[10px] md:text-[17px] xl:text-[21px]"
            variants={textVariants}
          >
         She recognized that cross-contamination was at the heart of the risk, so she began working with fabrics to determine the possibility of pathogen encapsulation. She began in her home, then moved to her elementary school laboratory. Soon, she worked at the university alongside a team of experts to create a membrane that chemically encapsulates viruses and bacteria.  
          </motion.p>
         
          
        </div>
        <div className="w-full  px-4 flex justify-center mt-8 lg:mt-0 lg:justify-end items-center relative ">
         
          <motion.img
            src="/assets/OurProducts/protection.png"
            alt="Antiviral Gown"
            className="w-full md:w-[534px] lg:w-[1000px]  object-cover"
            variants={imageVariants}
          />
        </div>
      </div>
      
    </motion.header>
  )
}

export default Hero