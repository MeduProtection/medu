import React from 'react'

// components/Timeline.js
import { useState } from 'react';

const timelineData = [
  { year: "1890s", description: "Emergence of Modern Antisepsis", color: "bg-blue-500", image: "/path/to/image1.png" },
  { year: "1918", description: "Typical gowns", color: "bg-blue-500", image: "/path/to/image2.png" },
  { year: "1940s", description: "Typical gowns", color: "bg-blue-500", image: "/path/to/image3.png" },
  { year: "1952", description: "Typical gowns", color: "bg-blue-500", image: "/path/to/image4.png" },
  { year: "2020s", description: "Pandemic Response and Future", color: "bg-green-500", image: "/path/to/image5.png" },
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col items-center py-8 bg-gradient-to-r from-green-100 to-blue-100">
      <h2 className="text-[50px] font-bold mb-4 text-center">
        Changing the fabric of medicine <br/> <span className="text-[#5587B6]">for good.</span>
      </h2>
      <p className="text-center mb-8 text-[22px]">
        The medical gowns used today were designed in the 1940s.
      </p>
      <div className="flex flex-wrap justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-500 text-white p-4 rounded-full mb-2">
            1890s
          </div>
          <p>Emergence of Modern Antisepsis</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-500 text-white p-4 rounded-full mb-2">
            1918
          </div>
          <p>Typical gowns</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-500 text-white p-4 rounded-full mb-2">
            1940s
          </div>
          <p>Typical gowns</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-500 text-white p-4 rounded-full mb-2">
            1952
          </div>
          <p>Typical gowns</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-green-500 text-white p-4 rounded-full mb-2">
            2020s
          </div>
          <p>Pandemic Response and Future</p>
        </div>
      </div>
      <div className="mt-8 text-center max-w-4xl">
        <h3 className="text-xl font-semibold mb-2 text-[#5587B6]">Early 20th Century: Introduction of Surgical Gowns</h3>
        <p className='text-[20px]'>
        The Spanish flu pandemic increases awareness of the need for protective clothing in medical environments. The first cotton surgical gowns appear, aimed at reducing disease transmission.
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <img src="/timeline.png" alt="Medical Gowns" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Timeline;
