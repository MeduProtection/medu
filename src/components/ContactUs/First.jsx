import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AppContext } from '@/Context/AppContext';

function Meet() {
  const { traduccion } = useContext(AppContext);
  const [ref, inView] = useInView({
    triggerOnce: true, // La animación solo se activará una vez
    threshold: 0.1, // El elemento se considerará visible cuando esté al menos el 10% visible
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center py-8 lg:py-12 px-4 lg:px-12 bg-[#5587B6] text-white"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        className="relative z-10 text-center flex flex-col items-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.p
          className="mb-8 max-w-4xl text-[17px] xl:text-[25px] px-4 sm:px-8 lg:px-0"
          variants={textVariants}
        >
          {traduccion.aboutUs.first.title[0]} <span className="text-[#95BC67]">{traduccion.aboutUs.first.title[1]}</span>
        </motion.p>
        <motion.p
          className="mb-8 max-w-2xl text-[17px] xl:text-[25px] px-4 sm:px-8 lg:px-0"
          variants={textVariants}
        >
          {traduccion.aboutUs.first.description}
        </motion.p>
        <motion.button
          className="bg-[#95BC67] text-white py-3 sm:py-2 px-8 rounded-full hover:bg-green-600 transition text-[14px] md:text-[22px] xl:text-[28px]"
          variants={textVariants}
        >
          {traduccion.aboutUs.first.button}
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Meet;
