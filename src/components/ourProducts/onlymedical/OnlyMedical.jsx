import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Difference() {
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
      className="relative flex flex-col items-center justify-center py-4 lg:py-20 px-4 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/assets/difference/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        className="relative z-10 text-center flex flex-col items-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2
          className="text-[16px] md:text-[37px] xl:text-[50px] font-bold mb-4"
          variants={textVariants}
        >
          The difference that <span className="text-[#95BC67]">makes a difference.</span>
        </motion.h2>
        <motion.p
          className="mb-8 max-w-2xl text-[7px] md:text-[17px] xl:text-[20px] px-10 xl:px-0"
          variants={textVariants}
        >
          Medu is not just the first of its kind. It’s the first of its kind offering a host of benefits to optimize savings of all kinds. See how Medu stacks up.
        </motion.p>
        <motion.button
          className="bg-[#95BC67] text-white  py-4 md:py-2 px-8 rounded-full hover:bg-green-600 transition text-[14px] md:text-[22px] xl:text-[28px]"
          variants={textVariants}
        >
          Why MEDU
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Difference;