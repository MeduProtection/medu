import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AppContext } from '@/Context/AppContext';

function MedicalMiracle() {
  const { traduccion } = useContext(AppContext);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div
      className="flex flex-col items-center py-12 px-4 lg:px-12"
      ref={ref}
    >
      <motion.h2
        className="text-[22px] md:text-[37px] lg:text-[50px] font-bold mb-4 text-center text-[#1B3954] leading-[25px] md:leading-[50px]"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
        transition={{ duration: 0.5 }}
      >
        {traduccion.home.medicalMiracle.heading[0]} <br className="xl:hidden" />
        <span className="text-[#5587B6]"> {traduccion.home.medicalMiracle.heading[1]}</span>
      </motion.h2>
      <motion.p
        className="text-center mb-4 md:max-w-xl lg:max-w-2xl text-[#1B3954] text-[10px] md:text-[17px] lg:text-[20px]"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      > {traduccion.home.medicalMiracle.description}
      </motion.p>
      <motion.p
        href="#"
        className="text-[#5587B6] mb-8 text-[10px] md:text-[22px] lg:text-[20px] font-bold"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
         {traduccion.home.medicalMiracle.readMore}
      </motion.p>
      <motion.button
        className="bg-[#95BC67] text-[14px] md:text-[22px] xl:text-[28px] text-white py-2 lg:py-4 px-8 rounded-full hover:bg-green-600 transition"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={buttonVariants}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
         {traduccion.home.medicalMiracle.button}
      </motion.button>
    </div>
  );
}

export default MedicalMiracle;