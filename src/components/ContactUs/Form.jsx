import React from 'react'
import ContactForm from './ContactForm'

function Form() {
  return (
    <div className="container mx-auto pt-[130px] px-4 xl:px-8">
    <div className="text-center lg:mb-8 flex flex-col items-center">
    
 
      <h2 className="max-w-4xl text-[28px] md:text-[45px] xl:text-[50px] font-bold text-[#1B3954] ">
      Become a partner for <span className="text-[#95BC67]">change</span>.
      </h2>
      <p className="max-w-sm md:max-w-2xl  lg:max-w-4xl text-[10px] md:text-[17px] xl:text-[21px] my-4  ">
      Join Medu in reducing waste. Tell us about your company, your capabilities, and your goals. Then connect with us to learn how to become a distribution partner.
      </p>
      
    </div>
    <ContactForm/>
    
    </div>
  )
}

export default Form