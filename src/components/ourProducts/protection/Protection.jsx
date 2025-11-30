import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from '@/Context/AppContext';


function Protection() {
  const { traduccion } = useContext(AppContext);
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
      className=" relative bg-[#1B3954] h-full w-full flex flex-col items-center justify-center pt-10 md:py-16 px-4 lg:px-16 xl:px-20 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
     
      <div className="container mx-auto flex flex-col lg:flex-row items-center xl:px-8 ">
        <div className="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-start px-4">
          <motion.h1
            className="text-[28px] md:text-[45px] xl:text-[55px] font-bold leading-tight text-white  mb-4"
            variants={textVariants}
          >
           {traduccion.ourProducts.protection.heading[0]} <span className='text-[#5587B6]'>{traduccion.ourProducts.protection.heading[1]} </span>
          </motion.h1>
          <motion.p
            className="max-w-sm lg:max-w-full mb-4 lg:mb-8 font-bold text-[#5587B6] text-[10px] md:text-[17px] xl:text-[21px]"
            variants={textVariants}
          >
           {traduccion.ourProducts.protection.description1} 
          </motion.p>
          <motion.p
            className="max-w-sm md:max-w-md  lg:max-w-full  md:mb-4 lg:mb-8 text-white text-[10px] md:text-[17px] xl:text-[21px]"
            variants={textVariants}
          >
          {traduccion.ourProducts.protection.description2} 
          </motion.p>
         
          <motion.button
            className="text-white bg-[#95BC67] hover:bg-[#059669]  focus:ring-[#059669]  rounded-[40px] text-[14px] md:text-[22px] xl:text-[28px] px-5 py-2.5 text-center lg:w-3/4 mt-4 lg:mt-[45px] "
            variants={buttonVariants}
          >
            {traduccion.ourProducts.protection.button} 
          </motion.button>
        </div>
        <div className="w-full  px-4 flex justify-center  lg:justify-end  items-center relative ">
         
          <motion.img
            src="#/assets/OurProducts/protection.png"
            alt="Antiviral Gown"
            className="w-full md:w-[534px] lg:w-[1000px]  object-cover"
            variants={imageVariants}
          />
        </div>
      </div>
      
    </motion.header>
  )
}

export default Protection