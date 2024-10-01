import React, { useContext, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { AppContext } from '@/Context/AppContext';


function HowItWorks() {
  const { traduccion } = useContext(AppContext);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPauseVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });

  return (
    <motion.div
      ref={ref}
      className="container mx-auto flex flex-wrap md:flex-nowrap"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-between py-12 px-4 lg:px-12">
        <div className="max-w-lg">
          <motion.h2
            className="text-[22px] md:text-[37px] lg:text-[53px] font-bold mb-4 text-center text-[#1B3954]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {traduccion.home.howItWorks.heading[0]} <span className="text-[#5587B6]">{traduccion.home.howItWorks.heading[1]}</span>{traduccion.home.howItWorks.heading[2]}
          </motion.h2>
          <motion.p
            className="text-[#5587B6] mb-4 font-bold text-[14px] text-center lg:text-start md:text-[23px] max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {traduccion.home.howItWorks.subheading}
          </motion.p>
          <motion.p
            className="mb-8 text-[10px] md:text-[17px] xl:text-[21px] max-w-lg text-center lg:text-start"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {traduccion.home.howItWorks.description}
          </motion.p>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end items-center mt-8 xl:mt-12">
          <motion.div
            className="relative flex justify-center lg:justify-end items-center cursor-pointer"
            onClick={handlePlayPauseVideo}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.video
              ref={videoRef}
              src="/assets/video/video.mp4"
              className={`w-full h-[400px] md:h-[500px] xl:h-[80%] object-contain`}
              poster={isPlaying ? null : "/assets/works/poster.png"}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              controls={isPlaying ? true : false}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className={isPlaying ? 'hidden' : "absolute inset-0 flex items-center justify-center lg:ml-10   mb-8 xl:mb-0"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="bg-white bg-opacity-75 p-4 rounded-full cursor-pointer"
                onClick={handlePlayPauseVideo}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <svg className="h-12 w-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  {isPlaying ? (
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /> // Pause icon
                  ) : (
                    <path d="M8 5v14l11-7z" /> // Play icon
                  )}
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default HowItWorks;