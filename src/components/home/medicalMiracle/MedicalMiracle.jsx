import React from 'react'

function MedicalMiracle() {
    return (
        <div className="flex flex-col items-center py-12 px-4 lg:px-12 ">
          <h2 className="text-[50px] font-bold mb-4 text-center text-[#1B3954]">
            Inventing a modern <span className="text-[#5587B6]">medical miracle</span>
          </h2>
          <p className="text-center mb-4 max-w-2xl text-[#1B3954] text-[20px]">
            Medu was born out of curiosity, passion, and necessity. During the COVID-19 pandemic, Medu Founder and CEO Tamara Chayo watched people in her community in Mexico City struggle to find adequate protection against pathogens. The biochemical engineer worked around the clock to address this urgent need and invented an innovative new fabric–and a social movement.
          </p>
          <a href="#" className="text-[#5587B6] mb-8  text-[20px]">
            Read more about Medu’s origin and team.
          </a>
          <button className="bg-[#95BC67] text-[28px] text-white py-4 px-8 rounded-full hover:bg-green-600 transition">
            Learn About Us
          </button>
        </div>
      );
}

export default MedicalMiracle