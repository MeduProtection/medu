import React from 'react'
import { motion } from 'framer-motion'


function WorldOfGood() {
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
            className="text-[28px] md:text-[45px] xl:text-[50px] font-bold leading-tight text-white  mb-4"
            variants={textVariants}
          >
           Doing a <span className='text-[#95BC67]'>world of good</span>
          </motion.h1>
         
          <motion.p
            className="max-w-sm md:max-w-md  lg:max-w-full mb-8 md:mb-4 text-white text-[10px] md:text-[17px] xl:text-[21px]"
            variants={textVariants}
          >
           At Medu, we’re changing the world by changing how providers use surgical and medical gowns. Our female-founded, female-led company is headquartered in North America. We are backed by investors throughout the United States and manufacture our medical gowns and coveralls in Mexico to achieve a smaller carbon footprint, faster delivery time, and a more competitive labor pool to yield a sustainable, cost-effective, and socially responsible supply chain with adherence to regulations, standards, and requirements. 

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

export default WorldOfGood