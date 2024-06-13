import React from 'react';
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion'

function WasteEctomy() {

  const [ref, inView] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1 } },
  };

  return (
    <motion.div
    ref={ref}
      className="container mx-auto flex flex-wrap md:flex-nowrap"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between py-12 px-4 lg:px-12 bg-white">
        <motion.div className="max-w-lg" variants={textVariants}>
          <h2 className="text-[22px] md:text-[37px] md:leading-[37px] lg:leading-[52px] lg:text-[50px] font-bold mb-4 text-[#1B3954] text-center lg:text-start">
            Give your hospital <br /> a{' '}
            <span className="text-[#4E88B0]"> waste-ectomy.</span>
          </h2>
          <p className="mb-4 lg:mb-8 max-w-md md:max-w-lg text-[10px] md:text-[17px] lg:text-[20px] text-center lg:text-start">
            Medical waste is a 5,000,000-ton, 935 billion-dollar problem,
            compromising public health and creating significant financial
            strain on healthcare systems. Medu’s innovative medical gowns and
            coveralls offer an unparalleled ability to increase savings, while
            dramatically reducing landfill waste. After all, the planet deserves
            a long, healthy life, too.
          </p>
          <div className="space-y-4 md:space-y-0 text-center lg:text-start text-[#1B3954] font-bold">
            <motion.p className="text-[12px] lg:text-[16px] font-bold" variants={textVariants}>
              up to <span className="text-[44px] md:text-[55px] text-[#95BC67] ">80%</span> cost savings
            </motion.p>
            <motion.p className="text-[12px] md:text-[16px] font-bold" variants={textVariants}>
              up to <span className="text-[44px] md:text-[55px] text-[#4E88B0]">90%</span> waste reduction
            </motion.p>
            <motion.p className="text-[12px] md:text-[16px] font-bold" variants={textVariants}>
              up to <span className="text-[44px] lg:text-[55px]">10 hrs</span> hrs weekly time savings
            </motion.p>
          </div>
        </motion.div>
        <motion.div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0" variants={imageVariants}>
          <div className="relative">
            <img src="/assets/waste/bata.png" alt="Medical Gown" className="max-w-full h-[70%]" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default WasteEctomy;