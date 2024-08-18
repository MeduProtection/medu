import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Headlines() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });

  return (
    <motion.div
ref={ref}
      className="flex flex-col items-center lg:py-12"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.h2
        className="text-[22px] lg:text-[50px] font-bold mb-4 text-center text-[#1B3954] leading-[25px] lg:leading-[52px]"
        variants={itemVariants}
      >
        Making headlines. <br className="xl:hidden" />
        <span className="text-[#5587B6]">Creating change.</span>
      </motion.h2>
      <motion.p
        className="text-center mb-8 md:max-w-xl lg:max-w-2xl text-[10px] md:text-[17px] lg:text-[20px] px-10"
        variants={itemVariants}
      >
        Medu is making news, and it&apos;s easy to see why. As the first and only medical products of its kind, we&apos;ve received attention and accolades the world over.
      </motion.p>
      <motion.h3
        className="text-lg font-semibold mb-4 text-center text-[#5587B6]"
        variants={itemVariants}
      >
        As seen in:
      </motion.h3>
      <motion.div
        className="flex flex-wrap justify-center items-center space-x-4 gap-x-[30px] lg:gap-x-[56px]"
        variants={itemVariants}
      >
        <a
          href="https://venturecapital.cmail19.com/t/ViewEmail/d/59087F56673457FF2540EF23F30FEDED/DC774908B0D14D50D57E886DBB2F7C8E?alternativeLink=False"
          target="_blank"
        >
          <img
            src="/assets/headlines/wsj.png"
            alt="WSJ"
            className="w-[44px] h-[26px] md:w-[77px] md:h-[44px] xl:h-8"
          />
        </a>
        <a
          href="https://www.bloomberglinea.com/2022/08/31/mexicana-de-22-anos-recibe-us4-m-para-su-startup-de-indumentaria-medica-sustentable/"
          target="_blank"
        >
          <img
            src="/assets/headlines/bloomberg.png"
            alt="Bloomberg"
            className="h-[16px] w-[87px] md:w-[151px] md:h-[28px] xl:h-8"
          />
        </a>
        <a href="https://expansion.mx/revista-digital-abril-2023" target="_blank">
          <img
            src="/assets/headlines/espansion.svg"
            alt="Expansión"
            className="w-[89px] h-[13px] md:w-[138px] md:h-[23px]  xl:h-8"
          />
        </a>
        <a href="https://techcrunch.com/2022/08/30/medu-4m-reusable-ppe/" target="_blank">
          <img
            src="/assets/headlines/techCrunch.svg"
            alt="TechCrunch"
            className="w-[91px] h-[13px] md:w-[157px] md:h-[22px] xl:h-8"
          />
        </a>
        <a href="https://www.waste360.com/medical-waste/medu-s-answer-to-personal-protective-equipment-waste" target="_blank">
          <img
            src="/assets/headlines/waste.png"
            alt="Waste360"
            className="w-[80px] h-[80px] md:w-[139px] md:h-[139px] xl:h-[173px]"
          />
        </a>
      </motion.div>
      <motion.div
        className="bg-[#5587B6] text-white py-4 px-6  mb-8 w-full"
        variants={itemVariants}
      >
        <p className="text-center text-[12px] md:text-[26px] lg:text-[36px] font-semibold italic">
          &apos;&apos;MEDU is changing the world one gown at a time&apos;&apos;
        </p>
        <p className="text-center mt-2 text-[8px] md:text-[16px] lg:text-[22px]">— Hillary Clinton</p>
      </motion.div>
      <motion.p
        className="text-center mb-8 text-[10px] md:text-[18px] lg:text-[20px] text-[#1B3954] font-bold"
        variants={itemVariants}
      >
        Read our press coverage, case studies, blog, and more.
      </motion.p>
      <motion.button
        className="bg-[#95BC67] text-white py-2 lg:py-4 px-8 rounded-full hover:bg-green-600 transition text-[14px] md:text-[22px] xl:text-[22px]"
        variants={itemVariants}
      >
        Gain Insights
      </motion.button>
    </motion.div>
  );
}

export default Headlines;