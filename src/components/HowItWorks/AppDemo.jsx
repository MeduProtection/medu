import React, { useContext, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { AppContext } from '@/Context/AppContext';

function AppDemo() {


  const [ref, inView] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });

  const { traduccion } = useContext(AppContext);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center py-12"
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute w-[118px] h-[84px] md:w-[231px] md:h-[165px] xl:w-[322px] xl:h-[230px] flex flex-col justify-center items-center text-[#1B3954] bg-[rgba(242,247,250,0.50)] shadow-md backdrop-blur-[2px] text-[7px] md:text-[14px] xl:text-[20px] font-bold p-4 md:p-[30px] lg:p-[40px] leading-[11px md:leading-[22px] xl:leading-[31px] -left-16 top-8 md:top-20 lg:-left-32 xl:-left-44 rounded-md lg:rounded-[37px]"
        >
         {traduccion.home.appDemo.description}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute w-[176px] h-[74px] md:w-[344px] md:h-[146px]  xl:w-[478px] xl:h-[230px] flex flex-col justify-center items-center text-[#1B3954] bg-[rgba(242,247,250,0.50)] shadow-md backdrop-blur-[2px] text-[7px] md:text-[14px] xl:text-[20px] font-bold lg:p-[40px] leading-[11px] lg:leading-[15px] xl:leading-[31px] bottom-8 -right-24 md:bottom-32 lg:-right-48 xl:bottom-20 xl:-right-80 rounded-[13px] md:rounded-[20px] lg:rounded-[37px]"
        >
          <ul className="flex flex-col gap-y-2 lg:gap-y-4">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-2 lg:gap-4"
            >
              <img
                className="w-[11px] h-[11px] md:w-[22px] md:h-[22px]"
                src="/assets/icons/check.svg"
                alt="Check"
              />
         {traduccion.home.appDemo.list[0]}
         </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-2 lg:gap-4"
            >
              <img
                className="w-[11px] h-[11px] md:w-[22px] md:h-[22px]"
                src="/assets/icons/check.svg"
                alt="Check"
              />
              {traduccion.home.appDemo.list[1]}
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-2 lg:gap-4"
            >
              <img
                className="w-[11px] h-[11px] md:w-[22px] md:h-[22px]"
                src="/assets/icons/check.svg"
                alt="Check"
              />
             {traduccion.home.appDemo.list[3]}
            </motion.li>
          </ul>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          src="/assets/demo/demo.png"
          alt="App Demo"
          className="h-[258px] md:h-full lg:h-[550px] 2xl:h-full"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="mt-8"
      >
        <button className="bg-[#95BC67] py-2 lg:py-4 px-8 rounded-[40px] hover:bg-green-600 transition text-[14px] md:text-[22px] xl:text-[28px] text-white">
        {traduccion.home.appDemo.button}
        </button>
      </motion.div>
    </div>
  );
}

export default AppDemo