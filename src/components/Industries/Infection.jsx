import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from '@/Context/AppContext'


function Infection() {
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

const { traduccion } = useContext(AppContext);

  return (
    <motion.header
      className=" relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
     
      <div className="container mx-auto flex flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-0 items-center xl:px-8">
        <div className="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-start px-4">
         

          <motion.p
            className="max-w-sm md:max-w-md  lg:max-w-full mb-8 md:mb-4 text-[#1B3954] text-[10px] md:text-[17px] xl:text-[21px] text-center lg:text-right"
            variants={textVariants}
          >
        {traduccion.industries.infection.section1.paragraph1}
          </motion.p>
          <motion.p
            className="max-w-sm md:max-w-md  lg:max-w-full mb-8 md:mb-4 text-[#1B3954] text-[10px] md:text-[17px] xl:text-[21px] text-center lg:text-right"
            variants={textVariants}
          >
       {traduccion.industries.infection.section1.paragraph2}
          </motion.p>
         
          
        </div>
        <div className="w-full  px-4 flex justify-center mt-8 lg:mt-0 lg:justify-end items-center relative ">
         
          <motion.img
            src="/assets/industries/infection.png"
            alt="Antiviral Gown"
            className="w-full md:w-[534px] lg:w-[1000px]  object-cover"
            variants={imageVariants}
          />
        </div>
      </div>
      <div className='w-full flex justify-center items-center px-4'>

      <p className=" max-w-sm lg:max-w-2xl text-[13px] lg:text-[20px] font-bold text-[#5587B6] text-center lg:mt-4">{traduccion.industries.infection.section2.statistic_text}</p>
      </div>
      <div className='w-full flex justify-center gap-[19px] px-4'>

          <div className="bg-white text-center  rounded-[34px] shadow-md w-[218px] h-[110px] lg:h-[173px] flex flex-col items-center justify-center">
            <p className="text-[25px] lg:text-[55px] font-bold text-[#95BC67]">80%</p>
            <p className="text-[8px] lg:text-[15px] text-gray-600 ">{traduccion.industries.infection.statistics[0].description}</p>
          </div>
          <div className="bg-white text-center w-[218px] h-[110px] lg:h-[173px] flex flex-col items-center justify-center  rounded-[34px] shadow-md ">
            <p className="text-[25px] lg:text-[55px] font-bold text-[#1B3954]">90%</p>
            <p className="text-[8px] lg:text-[15px] text-gray-600 ">{traduccion.industries.infection.statistics[1].description[0]} <br/>{traduccion.industries.infection.statistics[1].description[1]}</p>
          </div>
          <div className="bg-white text-center w-[218px] h-[110px] lg:h-[173px] flex flex-col items-center justify-center  rounded-[34px] shadow-md">
            <p className="text-[25px] lg:text-[55px] font-bold text-[#5587B6] leading-[20px] lg:leading-[50px]">10<br/> {traduccion.industries.infection.statistics[2].percentage[1]}</p>
            <p className="text-[8px] lg:text-[15px] text-gray-600 mt-2">{traduccion.industries.infection.statistics[2].description[0]} <br/> {traduccion.industries.infection.statistics[2].description[1]} </p>
          </div>
          </div>
    
    </motion.header>
  )
}

export default Infection