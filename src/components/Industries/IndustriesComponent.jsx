import { AppContext } from '@/Context/AppContext';
import Image from 'next/image';
import React, { useContext, useState } from 'react';

function Industries() {
  
  const { traduccion } = useContext(AppContext);

  const [hover, setHover] = useState(null);
  const [click, setClick] = useState(null);

  return (
    <div className="w-full h-full flex flex-col items-center pt-8 xl:px-8">
      <div className="text-center mb-8 flex flex-col items-center">
        <h2 className="max-w-2xl text-[28px] md:text-[45px] xl:text-[50px] font-bold text-[#1B3954] mb-[10px]">
          {traduccion.industries.industries.section.title[0]} <span className="text-[#95BC67]">{traduccion.industries.industries.section.title[1]}</span>{traduccion.industries.industries.section.title[3]}
        </h2>
        <p className="text-[10px] md:text-[17px] xl:text-[21px] my-4 max-w-4xl px-4 lg:px-0">
        {traduccion.industries.industries.description}
        </p>
      </div>
      <div className="grid  md:grid-cols-2 gap-4 mb-12">
        {traduccion.industries.industries.cards.map((industry, index) => (
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
