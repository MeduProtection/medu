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
      description: 'Chemical workers need protection from harmful substances. Medu offers the perfect solution, with a fabric that is designed to protect against contaminants.'
    },
    {
      title: 'Pharmaceutical Industry',
      description: 'The pharmaceutical industry requires protection from contaminants. Medu offers the perfect solution, with a fabric that is designed to protect against harmful substances.'
    },
    {
      title: 'Industrial Use',
      description: 'Other use cases for Medu gowns and overalls include a variety of industrial uses, such as automotive [additional examples]. Our protective clothing provides protection against exposure to chemical and environmental hazards, serves as a barrier between workers and hazardous materials or processes, ensures compliance with occupational safety regulations, and helps to control exposure and minimize the risk of accidents or injuries to promote a safer working environment. Medu’s sustainable clothing is also easy to launder, providing convenience, cost savings, and reduced environmental impact.'
    },
  ];

  const [hover, setHover] = useState(null);
  const [click, setClick] = useState(null);

  return (
    <div className="w-full h-full flex flex-col items-center xl:px-8">
      <div className="text-center mb-8 flex flex-col items-center">
        <h2 className="max-w-2xl text-[50px] md:text-[50px] font-bold text-[#1B3954] mb-[10px]">
          Medu for other <span className="text-[#95BC67]">industries</span>.
        </h2>
        <p className="text-[20px] my-4 max-w-4xl">
          With our revolutionary fabric, Medu isn’t just perfect for medicine. We also offer protection for a variety of other industries that require protection from contaminants. These industries include food and beverage, chemical, pharmaceutical, industrial, and more.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-12">
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
              <h4 className="text-[32px] font-bold">
                {industry.title}
                <br className={`${hover === index || click === index ? 'hidden' : ''}`} />
              </h4>
              <p
                className={`${
                  hover === index || click === index ? 'text-[18px] mt-2' : 'hidden'
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
