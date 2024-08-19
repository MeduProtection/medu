import React from 'react'
import { motion } from 'framer-motion'


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

  return (
    <motion.header
      className=" relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
     
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center xl:px-8">
        <div className="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-start px-4">
         
          
         
          <motion.p
            className="max-w-sm md:max-w-md  lg:max-w-full mb-8 md:mb-4 text-[#1B3954] text-[10px] md:text-[17px] xl:text-[21px] text-right"
            variants={textVariants}
          >
        Medu provides infection control across all caregiver-patient scenarios, including surgical suits and isolation units where sterile conditions are paramount. Because healthcare providers can wear each gown or coverall multiple times, Medu reduces the number of changes required, resulting in more time with patients–and greater potential to save lives. 
          </motion.p>
          <motion.p
            className="max-w-sm md:max-w-md  lg:max-w-full mb-8 md:mb-4 text-[#1B3954] text-[10px] md:text-[17px] xl:text-[21px] text-right"
            variants={textVariants}
          >
        Medu’s comfortable, breathable, patent-pending material allows for up to 50 washings. Medical facilities and institutions don’t need to invest in specialized equipment, making Medu easy to incorporate into current systems. Learn how Medu gowns are tracked and laundered. 
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
      <div className='w-full flex justify-center items-center'>

      <p className="max-w-2xl text-[20px] font-bold text-[#5587B6] text-center">With the ability for each medical/surgical gown to replace 450 gowns, Medu helps save more time, more lives, and more resources.</p>
      </div>
      <div className='w-full flex justify-center gap-[19px]'>

          <div className="bg-white text-center  rounded-[34px] shadow-md w-[218px] h-[173px] flex flex-col items-center justify-center">
            <p className="text-[55px] font-bold text-[#95BC67]">80%</p>
            <p className="text-gray-600 ">cost savings</p>
          </div>
          <div className="bg-white text-center w-[218px] h-[173px] flex flex-col items-center justify-center  rounded-[34px] shadow-md ">
            <p className="text-[55px] font-bold text-[#1B3954]">90%</p>
            <p className="text-gray-600 ">waste <br/>reduction</p>
          </div>
          <div className="bg-white text-center w-[218px] h-[173px] flex flex-col items-center justify-center  rounded-[34px] shadow-md">
            <p className="text-[55px] font-bold text-[#5587B6] leading-[50px]">10<br/> hours</p>
            <p className="text-gray-600 mt-2">weekly time <br/> saving</p>
          </div>
          </div>
    
    </motion.header>
  )
}

export default Infection