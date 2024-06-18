import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function Form() {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script1.async = true;
    script1.charset = "utf-8";
    document.body.appendChild(script1);

    script1.onload = () => {
      window.hbspt.forms.create({
        region: "eu1",
        portalId: "25062945",
        formId: "9f8b622e-9d39-4de8-8825-138ac14c4709",
        target: '#hubspot-form'
      });
    };

    return () => {
      document.body.removeChild(script1);
    };
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });

  return (
    <div
    ref={ref}
    className=''>
       <motion.h2
            className="text-[22px] md:text-[37px] lg:text-[53px] font-bold mb-4 text-center text-[#1B3954]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Contact <span className="text-[#5587B6]">Us</span>
          </motion.h2>
    <div id="hubspot-form"  className="container mx-auto flex flex-wrap  md:flex-nowrap  px-4 lg:px-12">
      {/* El formulario de HubSpot se insertará aquí */}
    </div>
    </div>
  );
}

export default Form;
