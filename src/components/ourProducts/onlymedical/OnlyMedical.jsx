import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function OnlyMedical() {
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
      className="relative flex flex-col items-center justify-center py-10 md:py-16 px-4 lg:px-16 xl:px-20 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/assets/OurProducts/onlymedical.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        className="relative z-10 text-center flex flex-col items-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.p
          className="mb-6 max-w-4xl text-[12px] sm:text-[16px] md:text-[18px] xl:text-[20px] px-4 md:px-8 xl:px-0"
          variants={textVariants}
        >
          As the only medical gown that offers Level 4 protection with the ability to protect against cross-contamination, Medu gowns can be worn across multi patient visits, giving caregivers back time they would have spent changing.
        </motion.p>
        <motion.p
          className="mb-6 max-w-4xl text-[12px] sm:text-[16px] md:text-[18px] xl:text-[20px] px-4 md:px-8 xl:px-0 font-bold text-[#4E88B0]"
          variants={textVariants}
        >
          And less time changing clothes means more time changing–and saving–lives.
        </motion.p>
        <motion.p
          className="mb-6 max-w-2xl text-[12px] sm:text-[16px] md:text-[18px] xl:text-[20px] px-4 md:px-8 xl:px-0 text-[#95BC67]"
          variants={textVariants}
        >
          See for yourself.
        </motion.p>
        <motion.button
          className="bg-[#95BC67] text-white py-3 md:py-2 px-6 md:px-8 rounded-full hover:bg-green-600 transition text-[12px] sm:text-[16px] md:text-[20px] xl:text-[24px]"
          variants={textVariants}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}

export default OnlyMedical;
