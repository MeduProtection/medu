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
      className="pt-32 xl:pt-36 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
     
      <div className="container mx-auto flex flex-col lg:flex-row items-center xl:px-8"> 
        <div className="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-start px-4">
          <motion.h1
            className="text-[28px] md:text-[45px] xl:text-[50px] font-bold leading-tight text-[#1B3954]  "
            variants={textVariants}
          >
           {traduccion.industries.hero.title[0]} <span className='text-[#95BC67]'>{traduccion.industries.hero.title[1]}</span>{traduccion.industries.hero.title[2]}
          </motion.h1>
          <p className="text-[18px] font-semibold text-[#5587B6] my-2">{traduccion.industries.hero.subtitle}
          </p>
         
          <motion.p
            className="max-w-sm md:max-w-md  lg:max-w-full  md:mb-4 lg:mb-8 text-[#1B3954] text-[10px] md:text-[17px] xl:text-[21px]"
            variants={textVariants}
          >
         {traduccion.industries.hero.description}
          </motion.p>
         
          
        </div>
        <div className="w-full  px-4 flex justify-center mt-8 lg:mt-0 lg:justify-end items-center relative ">
         
          <motion.img
            src="/assets/industries/hero.png"
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