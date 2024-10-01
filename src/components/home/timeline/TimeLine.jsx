import React, { useContext } from 'react'
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion'


// components/Timeline.js
import { useState } from 'react';
import { AppContext } from '@/Context/AppContext';

const Timeline = () => {

  const { traduccion } = useContext(AppContext);


  const [activeIndex, setActiveIndex] = useState(0);
  
  const [fechaActiva, setFechaActiva] = useState(4)


  

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }
  }
  const timeLine = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 4, delay: 1 } }
  }
  const textYear = {
    hidden: { opacity: 0, },
    visible: { opacity: 1, transition: { duration: 2, delay: 1.5 } }
  }
  
  const [ref, inView] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });
  return (
    <div ref={ref} className="container mx-auto flex flex-wrap  md:flex-nowrap relative">
     
      
    <div className="w-full flex flex-col items-center py-8  ">
      <motion.h2
       animate={inView ? "visible" : "hidden"}
       variants={textVariants}
      className="text-[22px] md:text-[37px] lg:text-[50px] font-bold mb-4 text-center text-[#1B3954] w-[80%] md:w-[70%] lg:w-full lg:leading-[48px]">
        {
          traduccion.home.timeline.heading[0]
        } <br className='hidden lg:block'/> <span className="text-[#5587B6]">
          {
          traduccion.home.timeline.heading[1]
        }
        </span>
      </motion.h2>
      <motion.p 
      animate={inView ? "visible" : "hidden"}
      variants={textVariants}
      className="text-center mb-8 text-[10px] md:text-[17px] lg:text-[22px]">
        {
          traduccion.home.timeline.subheading
        }
      </motion.p>
      <div className="flex  justify-between mt-10 space-y-4 lg:space-y-0 lg:space-x-8 relative w-full lg:h-[350px]">
        <motion.img
        animate={inView ? "visible" : "hidden"}
        variants={timeLine}
        src='/assets/timeline/line.png' alt="Medical Gowns" className="w-full h-auto absolute -z-10 px-4 lg:px-0" />
        <motion.div
         animate={inView ? "visible" : "hidden"}
         variants={textYear}
        className="flex flex-col items-center text-center translate-x-8 -translate-y-4 xl:translate-y-2 lg:translate-x-0 ">
          
        <div 
        onClick={()=> setFechaActiva(0)}
        className={`cursor-pointer w-[47px] h-[47px] md:w-[104px] md:h-[104px] xl:w-[161px] xl:h-[161px] flex flex-col items-center justify-center text-[9px]  md:text-[20px] lg:text-[30px] text-white p-4 rounded-full mb-2 ${fechaActiva == 0 ? 'bg-[#95BC67]' : 'bg-[#4E88B0] hover:bg-[#95BC67]'}`}>
{/*   <div className='bg-white rounded-full w-[170px] h-[170px] absolute -z-10 top-0 left-0'/>
 */}    1918s
</div>
          <p className='hidden lg:block max-w-[200px] text-[#1B3954] text-[22px]'>{
            traduccion.home.timeline.years[0].label
            }</p>
        </motion.div>
        <motion.div
        animate={inView ? "visible" : "hidden"}
        variants={textYear}
        className="flex flex-col items-center text-center">
          <div 
          onClick={()=> setFechaActiva(1)}
          className={`cursor-pointer w-[47px] h-[47px] md:w-[104px] md:h-[104px] xl:w-[161px] xl:h-[161px] flex flex-col items-center justify-center text-[9px] md:text-[20px] lg:text-[30px] text-white p-4 rounded-full mb-2 -translate-y-6 translate-x-4 lg:translate-x-0 lg:translate-y-0 ${fechaActiva == 1 ? 'bg-[#95BC67]' : 'bg-[#4E88B0] hover:bg-[#95BC67]'}`}>
            1930s
          </div>
          <p className='hidden lg:block max-w-[200px] text-[#1B3954] text-[22px]'>{
            traduccion.home.timeline.years[1].label
            }</p>
        </motion.div>
        <motion.div 
        animate={inView ? "visible" : "hidden"}
        variants={textYear}
        className="flex flex-col items-center text-center  translate-y-4 lg:translate-y-20  xl:translate-y-32 lg:-translate-x-8">
          <div 
          onClick={()=> setFechaActiva(2)}
          className={`cursor-pointer w-[47px] h-[47px] md:w-[104px] md:h-[104px] xl:w-[161px] xl:h-[161px] flex flex-col items-center justify-center text-[9px] md:text-[20px] lg:text-[30px] text-white p-4 rounded-full mb-2 ${fechaActiva == 2 ? 'bg-[#95BC67]' : 'bg-[#4E88B0] hover:bg-[#95BC67]'}`}>
            1970s
          </div>
          <p className='hidden lg:block max-w-[200px] text-[#1B3954] text-[22px]'>{
            traduccion.home.timeline.years[2].label
            }</p>
        </motion.div>
        <motion.div
        animate={inView ? "visible" : "hidden"}
        variants={textYear}
        className="flex flex-col items-center text-center -translate-y-8">
          <div 
          onClick={()=> setFechaActiva(3)}
          className={`cursor-pointer w-[47px] h-[47px] md:w-[104px] md:h-[104px] xl:w-[161px] xl:h-[161px] flex flex-col items-center justify-center text-[9px] md:text-[20px] lg:text-[30px] text-white p-4 rounded-full mb-2 ${fechaActiva == 3 ? 'bg-[#95BC67]' : 'bg-[#4E88B0] hover:bg-[#95BC67]'}`}>
            1990s
          </div>
          <p className='hidden lg:block max-w-[200px] text-[#1B3954] text-[22px]'>{
            traduccion.home.timeline.years[3].label
            }</p>
        </motion.div>
        <motion.div animate={inView ? "visible" : "hidden"}
         variants={textYear} className="flex flex-col items-center text-center translate-y-0 -translate-x-4 xl:translate-y-8 xl:translate-x-0 ">
          <div
          onClick={()=> setFechaActiva(4)}
          className={`cursor-pointer w-[47px] h-[47px] md:w-[104px] md:h-[104px] xl:w-[161px] xl:h-[161px] flex flex-col items-center justify-center text-[9px] md:text-[20px] lg:text-[30px] text-white p-4 rounded-full mb-2 ${fechaActiva == 4 ? 'bg-[#95BC67]' : 'bg-[#4E88B0] hover:bg-[#95BC67]'}`}>
            2020s
          </div>
          <p className='hidden lg:block max-w-[200px] text-[#1B3954] text-[22px]'>{
            traduccion.home.timeline.years[4].label
            }</p>
        </motion.div>
      </div>
      <div className='flex flex-col lg:flex-row w-full items-center  lg:items-start lg:mt-10 '>

      <div className="mt-8 lg:w-1/2  max-w-4xl py-8 h-[150px] md:h-[300px]">
        <h3 className="text-[14px] md:text-xl text-center lg:text-start xl:items-center font-semibold mb-2 px-10 lg:pr-10 text-[#5587B6]">{traduccion.home.informacion[fechaActiva].titulo }</h3>
        <p className='text-[10px] text-center lg:text-start md:text-[20px] px-10 lg:pr-10'>
        {traduccion.home.informacion[fechaActiva].descripcion1 }
        </p>
        <p className=' text-[10px] text-center lg:text-start md:text-[20px] px-10 lg:pr-10'>
        {traduccion.home.informacion[fechaActiva].descripcion2 }
        </p>
      </div>
      <div className="flex justify-center mt-8 relative h-[250px] md:h-[450px] xl:h-[550px]">
        <img src={`/assets/timeline/${fechaActiva}.png`} alt="Medical Gowns" className="w-[252px] md:w-[408px] md:h-[408px] xl:w-[501px] h-[252px] xl:h-[501px] object-cover" />
        <img src={`/assets/timeline/${fechaActiva}-${fechaActiva}.png`} alt="Medical Gowns" className="w-[136px] md:w-[221px] md:h-[221px] xl:w-[272px] h-[138px] xl:h-[272px] absolute lg:top-[50px] -right-[50px] md:-right-[100px]" />
        
      </div>
      </div>
    </div>
    
    </div>
  );
};

export default Timeline;
