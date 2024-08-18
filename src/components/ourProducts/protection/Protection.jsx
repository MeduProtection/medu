import React from 'react'
import { motion } from 'framer-motion'


function Protection() {
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
      className=" relative bg-[#1B3954]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
     
      <div className="container mx-auto flex flex-col lg:flex-row items-center xl:px-8">
        <div className="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-start px-4">
          <motion.h1
            className="text-[28px] md:text-[45px] xl:text-[55px] font-bold leading-tight text-white  mb-4"
            variants={textVariants}
          >
           Protection <span className='text-[#5587B6]'>without compromise</span>
          </motion.h1>
          <motion.p
            className="max-w-sm lg:max-w-full mb-8 font-bold text-[#5587B6] text-[10px] md:text-[17px] xl:text-[21px]"
            variants={textVariants}
          >
           Medu’s revolutionary fabric offers optimal protection and unparelleled comfort.
          </motion.p>
          <motion.p
            className="max-w-sm md:max-w-md  lg:max-w-full mb-8 md:mb-4 text-white text-[10px] md:text-[17px] xl:text-[21px]"
            variants={textVariants}
          >
           Developed by a biochemical engineer and in trial with some of the most prestigious medical facilities in the United States, Medu uses a patent-pending membrane that traps and kills viruses and bacteria, then washes them away with laundering that requires no special detergents or equipment.
          </motion.p>
         
          <motion.button
            className="text-white bg-[#95BC67] hover:bg-[#059669]  focus:ring-[#059669]  rounded-[40px] text-[14px] md:text-[22px] xl:text-[28px] px-5 py-2.5 text-center lg:w-3/4 mt-[45px] "
            variants={buttonVariants}
          >
            See How Medu Works
          </motion.button>
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
      <div className="flex justify-center mt-10 ">
        <motion.p
          className="text-[11px] text-center   md:text-[21px] text-[#1B3954] font-bold w-[60%] lg:w-full"
          variants={textVariants}
        >
          Currently in trial with some of the most respected medical facilities in the U.S.
        </motion.p>
      </div>
    </motion.header>
  )
}

export default Protection