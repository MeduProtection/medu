import Image from 'next/image';
import React, { useState } from 'react';

function Industries() {
  const industries = [
    {
      title: 'Food and Beverage',
      description: 'Medu is perfect for the food and beverage industry. Our fabric is designed to protect against contaminants, making it the perfect choice for food and beverage workers.'
    },
    {
      title: 'Chemical Industry',
      description: 'Chemical workers require protection from harmful substances. Medu’s fabric is specifically designed to protect against contaminants in chemical environments.'
    },
    {
      title: 'Pharmaceutical Industry',
      description: 'The pharmaceutical sector demands protection from contaminants. Medu’s fabric offers the necessary protection against hazardous substances, ensuring safety.'
    },
    {
      title: 'Industrial Use',
      description: 'Medu’s gowns are used in automotive and other industries, offering protection from chemical hazards and compliance with safety regulations, while being easy to launder.'
    },
  ];
  

  const [hover, setHover] = useState(null);
  const [click, setClick] = useState(null);

  return (
    <div className="w-full h-full flex flex-col items-center pt-8 xl:px-8">
      <div className="text-center mb-8 flex flex-col items-center">
        <h2 className="max-w-2xl text-[28px] md:text-[45px] xl:text-[50px] font-bold text-[#1B3954] mb-[10px]">
          Medu for other <span className="text-[#95BC67]">industries</span>.
        </h2>
        <p className="text-[10px] md:text-[17px] xl:text-[21px] my-4 max-w-4xl px-4 lg:px-0">
          With our revolutionary fabric, Medu isn’t just perfect for medicine. We also offer protection for a variety of other industries that require protection from contaminants. These industries include food and beverage, chemical, pharmaceutical, industrial, and more.
        </p>
      </div>
      <div className="grid  md:grid-cols-2 gap-4 mb-12">
        {industries.map((industry, index) => (
          <div
            key={index}
            className={`relative w-[280px] h-[329px] flex flex-col justify-center text-white text-center p-4 rounded-[49px] cursor-pointer`}
            onClick={() => setClick(index)}
            onMouseOver={() => setHover(index)}
            onMouseOut={() => setHover(null)}
          >
            <div className="absolute w-full h-full top-0 left-0 z-10">
              <img
                src={`/assets/industries/${index + 1}.png`}
                alt={industry.title}
                className="rounded-[49px] w-full h-full object-cover"
              />
            </div>
            <div
              className={`w-full h-full ${
                hover === index || click === index ? 'bg-[#95BC67]' : 'bg-[#1B3954]'
              } opacity-70 absolute top-0 left-0 z-20 rounded-[49px]`}
            />
            <div className="relative z-30">
              <h4 className="text-[20px] font-bold">
                {industry.title}
                <br className={`${hover === index || click === index ? 'hidden' : ''}`} />
              </h4>
              <p
                className={`${
                  hover === index || click === index ? 'text-[15px] mt-2' : 'hidden'
                } transition-all duration-300`}
              >
                {industry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Industries;
