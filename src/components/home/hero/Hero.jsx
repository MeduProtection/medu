import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import Testimonio from './Testimonio'
import Savings from './Savings'
import Bar from './Bar' 
import { AppContext } from '@/Context/AppContext'

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
      className="pt-32 xl:py-36 relative"
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
            <span className="text-[#95BC67]  text-[17px] md:text-[27px] xl:text-[34px]">
              {traduccion?.home?.hero[0]}
            </span>{' '}
            <br />{traduccion?.home?.hero[1]}<br /> {traduccion?.home?.hero[2]} <br />{' '}
            <span className="text-[#4E88B0]">{traduccion?.home?.hero[3]}</span>.
          </motion.h1>
          <motion.p
            className="max-w-sm md:max-w-md  lg:max-w-full mb-8 md:mb-4 text-gray-700 text-[10px] md:text-[17px] xl:text-[21px]"
            variants={textVariants}
          >
            {traduccion?.home?.hero[4]}
          </motion.p>
          <motion.p
            className="max-w-sm lg:max-w-full mb-8 font-bold text-[#5587B6] text-[10px] md:text-[17px] xl:text-[21px]"
            variants={textVariants}
          >
            {traduccion?.home?.hero[5]}
          </motion.p>
          <motion.button
            className="text-white bg-[#95BC67] hover:bg-[#059669]  focus:ring-[#059669]  rounded-[40px] text-[14px] md:text-[22px] xl:text-[28px] px-5 py-2.5 text-center lg:w-3/4"
            variants={buttonVariants}
          >
            {traduccion?.home?.hero[6]}
          </motion.button>
        </div>
        <div className="w-full  px-4 flex justify-center mt-8 lg:mt-0 lg:justify-end items-center relative ">
          <Testimonio />
          <Savings />
          <Bar />
          <motion.img
            src="/assets/hero/hero.png"
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
         {traduccion?.home?.hero[7]}
         </motion.p>
      </div>
    </motion.header>
  )
}

export default Hero