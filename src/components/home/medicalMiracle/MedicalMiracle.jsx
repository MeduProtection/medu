import React from 'react'

function MedicalMiracle() {
    return (
        <div className="flex flex-col items-center py-12 px-4 lg:px-12 bg-gradient-to-b from-blue-50 to-white">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Inventing a modern <span className="text-blue-600">medical miracle</span>
          </h2>
          <p className="text-center mb-8 max-w-2xl">
            Medu was born out of curiosity, passion, and necessity. During the COVID-19 pandemic, Medu Founder and CEO Tamara Chayo watched people in her community in Mexico City struggle to find adequate protection against pathogens. The biochemical engineer worked around the clock to address this urgent need and invented an innovative new fabric–and a social movement.
          </p>
          <a href="#" className="text-blue-600 mb-8 underline">
            Read more about Medu’s origin and team.
          </a>
          <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition">
            Learn About Us
          </button>
        </div>
      );
}

export default MedicalMiracle