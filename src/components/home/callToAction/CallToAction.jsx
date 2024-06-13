import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function CallToAction() {
  const [ref, inView] = useInView({
    triggerOnce: true, // La animación solo se activará una vez
    threshold: 0.2, // La animación se activará cuando el elemento esté al 20% dentro del viewport
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="flex flex-col items-center py-8 lg:py-12 px-4 lg:px-12 bg-[#5587B6] text-white"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h2
        className="text-[16px] md:text-[37px] xl:text-[50px] font-bold mb-4 text-center"
        variants={textVariants}
      >
        Change your gowns. Transform the world.
      </motion.h2>
      <motion.p
        className="text-center mb-4 lg:mb-8 max-w-2xl text-[10px] md:text-[17px] xl:text-[22px] px-10 xl:px-0"
        variants={textVariants}
      >
        Save money, time, and waste in a way never before possible. Reach out to book a meeting, learn more, and get started.
      </motion.p>
      <motion.button
        className="bg-[#1B3954] text-white py-2 px-6 rounded-full hover:bg-blue-900 transition text-[14px] md:text-[22px] xl:text-[28px]"
        variants={buttonVariants}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
}

export default CallToAction;