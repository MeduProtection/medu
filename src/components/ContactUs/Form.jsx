import React from 'react'
import ContactForm from './ContactForm'

function Form() {
  return (
    <div className="container mx-auto pt-[200px] xl:px-8">
    <div className="text-center mb-8 flex flex-col items-center">
    
 
      <h2 className="max-w-4xl text-[50px] md:text-[50px] font-bold text-[#1B3954] mb-[29px]">
      Become a parter for <span className="text-[#95BC67]">change</span>.
      </h2>
      <p className="text-[20px] my-4 max-w-4xl ">
      Join Medu in reducing waste. Tell us about your company, your capabilities, and your goals. Then connect with us to learn how to become a distribution partner.
      </p>
      
    </div>
    <ContactForm/>
    
    </div>
  )
}

export default Form