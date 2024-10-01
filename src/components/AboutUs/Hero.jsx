import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from '@/Context/AppContext';


function Hero() {
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
      className=" relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
     
      <div className="container mx-auto flex flex-col lg:flex-row items-center pt-[130px]  xl:px-8">
        <div className="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-start px-4">
          <motion.h1
            className="text-[28px] md:text-[45px] xl:text-[50px] font-bold leading-tight text-[#1B3954] mb-4 "
            variants={textVariants}
          >
           {traduccion.aboutUs.hero.title[0]} <span className='text-[#95BC67]'>{traduccion.aboutUs.hero.title[1]}</span>{traduccion.aboutUs.hero.title[2]}
          </motion.h1>
          
         
          <motion.p
            className="max-w-sm md:max-w-md  lg:max-w-full mb-4 text-[#1B3954] text-[10px] md:text-[17px] xl:text-[21px]"
            variants={textVariants}
          >
      {traduccion.aboutUs.hero.description}
          </motion.p>
          
         
          
        </div>
        <div className="w-full  px-4 flex justify-center  lg:mt-0 lg:justify-end items-center relative ">
         
          <motion.img
            src="/assets/AboutUs/hero1.png"
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