import React from 'react'

// components/Timeline.js
import { useState } from 'react';

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const [fechaActiva, setFechaActiva] = useState(4)

  const informacion = [
    {
      index: 0,
      titulo: 'Development and Standards',
      descripcion1: 'The Spanish flu pandemic increases awareness of the need for protective clothing in medical environments. The first cotton surgical gowns appear, aimed at reducing disease transmission.',
      descripcion2: ''
    },
    {
      index: 1,
      titulo: 'Regulations and Safety Improvement',
      descripcion1: '1930s: Cotton surgical gowns become standard in operating rooms. Although not sterile, they represented a significant advance in infection protection.',
      descripcion2: '1940s: Sterilization of surgical gowns becomes common practice, improving the prevention of postoperative infections.'
    },
    {
      index: 2,
      titulo: 'Efficiency and Sustainability',
      descripcion1: '1970s: Stricter regulations are implemented for surgical gowns to prevent cross-contamination, with standards from AORN and NIOSH.',
      descripcion2: '1980s: Advanced materials like polypropylene improve comfort, fluid resistance, and antimicrobial properties of disposable gowns.'
    },
    {
      index: 3,
      titulo: 'Pandemic Response and Future',
      descripcion1: '1990s: Emphasis on improving breathability and comfort of surgical gowns, developing lighter materials, and reducing costs without compromising safety.',
      descripcion2: '2000s: Growing interest in reusable and eco-friendly disposable gowns, improving washing and sterilization processes, and researching biodegradable materials.'
    },
    {
      index: 4,
      titulo: 'Early 20th Century: Introduction of Surgical Gowns',
      descripcion1: '2021: The COVID-19 pandemic increases the demand for surgical gowns and other personal protective equipment (PPE). MEDU is born with sustainability as a key focus. Our gowns and coveralls are created with a proprietary process that yields the highest levels of protection and sterility, Medu brings protective coverings into the 21st Century with reusable Level 4 PPE gowns and coveralls that require no special laundering and prevent cross-contamination.',
      descripcion2: ''
    }
  ]
  
  return (
    <div className="container mx-auto flex flex-wrap  md:flex-nowrap">
      
    <div className="w-full flex flex-col items-center py-8  ">
      <h2 className="text-[22px] md:text-[37px] lg:text-[50px] font-bold mb-4 text-center text-[#1B3954] w-[80%] md:w-[70%] lg:w-full leading-[48px]">
        Changing the fabric of medicine <br className='hidden lg:block'/> <span className="text-[#5587B6]">for good.</span>
      </h2>
      <p className="text-center mb-8 text-[10px] md:text-[17px] lg:text-[22px]">
        The medical gowns used today were designed in the 1940s.
      </p>
      <div className="flex  justify-between mt-10 space-y-4 lg:space-y-0 lg:space-x-8 relative w-full lg:h-[350px]">
        <img src='/assets/timeline/line.png' alt="Medical Gowns" className="w-full h-auto absolute -z-10 px-4 lg:px-0" />
        <div className="flex flex-col items-center text-center translate-x-8 -translate-y-4 xl:translate-y-12 lg:translate-x-0 ">
          
        <div 
        onClick={()=> setFechaActiva(0)}
        className={`cursor-pointer w-[47px] h-[47px] md:w-[104px] md:h-[104px] xl:w-[161px] xl:h-[161px] flex flex-col items-center justify-center text-[9px]  md:text-[20px] lg:text-[30px] text-white p-4 rounded-full mb-2 ${fechaActiva == 0 ? 'bg-[#95BC67]' : 'bg-[#4E88B0] hover:bg-[#95BC67]'}`}>
{/*   <div className='bg-white rounded-full w-[170px] h-[170px] absolute -z-10 top-0 left-0'/>
 */}    1918s
</div>
          <p className='hidden lg:block max-w-[200px] text-[#1B3954] text-[22px]'>Introduction of
Surgical Gowns</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div 
          onClick={()=> setFechaActiva(1)}
          className={`cursor-pointer w-[47px] h-[47px] md:w-[104px] md:h-[104px] xl:w-[161px] xl:h-[161px] flex flex-col items-center justify-center text-[9px] md:text-[20px] lg:text-[30px] text-white p-4 rounded-full mb-2 -translate-y-6 translate-x-4 lg:translate-x-0 lg:translate-y-0 ${fechaActiva == 1 ? 'bg-[#95BC67]' : 'bg-[#4E88B0] hover:bg-[#95BC67]'}`}>
            1930s
          </div>
          <p className='hidden lg:block max-w-[200px] text-[#1B3954] text-[22px]'>Development
and Standards</p>
        </div>
        <div className="flex flex-col items-center text-center  translate-y-4 lg:translate-y-20  xl:translate-y-32 lg:-translate-x-8">
          <div 
          onClick={()=> setFechaActiva(2)}
          className={`cursor-pointer w-[47px] h-[47px] md:w-[104px] md:h-[104px] xl:w-[161px] xl:h-[161px] flex flex-col items-center justify-center text-[9px] md:text-[20px] lg:text-[30px] text-white p-4 rounded-full mb-2 ${fechaActiva == 2 ? 'bg-[#95BC67]' : 'bg-[#4E88B0] hover:bg-[#95BC67]'}`}>
            1970s
          </div>
          <p className='hidden lg:block max-w-[200px] text-[#1B3954] text-[22px]'>Regulations and
Safety Environment</p>
        </div>
        <div className="flex flex-col items-center text-center -translate-y-8">
          <div 
          onClick={()=> setFechaActiva(3)}
          className={`cursor-pointer w-[47px] h-[47px] md:w-[104px] md:h-[104px] xl:w-[161px] xl:h-[161px] flex flex-col items-center justify-center text-[9px] md:text-[20px] lg:text-[30px] text-white p-4 rounded-full mb-2 ${fechaActiva == 3 ? 'bg-[#95BC67]' : 'bg-[#4E88B0] hover:bg-[#95BC67]'}`}>
            1952
          </div>
          <p className='hidden lg:block max-w-[200px] text-[#1B3954] text-[22px]'>Efficiency and
Sustainability</p>
        </div>
        <div className="flex flex-col items-center text-center translate-y-0 -translate-x-4 xl:translate-y-16 xl:translate-x-0">
          <div
          onClick={()=> setFechaActiva(4)}
          className={`cursor-pointer w-[47px] h-[47px] md:w-[104px] md:h-[104px] xl:w-[161px] xl:h-[161px] flex flex-col items-center justify-center text-[9px] md:text-[20px] lg:text-[30px] text-white p-4 rounded-full mb-2 ${fechaActiva == 4 ? 'bg-[#95BC67]' : 'bg-[#4E88B0] hover:bg-[#95BC67]'}`}>
            2020s
          </div>
          <p className='hidden lg:block max-w-[200px] text-[#1B3954] text-[22px]'>Pandemic 
Response and Future</p>
        </div>
      </div>
      <div className="mt-8 text-center max-w-4xl py-8 h-[150px] md:h-[300px]">
        <h3 className="text-[14px] md:text-xl font-semibold mb-2 text-[#5587B6]">{informacion[fechaActiva].titulo }</h3>
        <p className='text-[10px] md:text-[20px] px-10'>
        {informacion[fechaActiva].descripcion1 }
        </p>
        <p className=' text-[10px] md:text-[20px] px-10'>
        {informacion[fechaActiva].descripcion2 }
        </p>
      </div>
      <div className="flex justify-center mt-8 relative h-[250px] md:h-[450px]">
        <img src={`/assets/timeline/${fechaActiva}.png`} alt="Medical Gowns" className="w-[252px] md:w-[408px] md:h-[408px] xl:w-[501px] h-[252px] xl:h-[501px] object-cover" />
        <img src={`/assets/timeline/${fechaActiva}-${fechaActiva}.png`} alt="Medical Gowns" className="w-[136px] md:w-[221px] md:h-[221px] xl:w-[272px] h-[138px] xl:h-[272px] absolute lg:top-[50px] -right-[50px] md:-right-[100px]" />
        
      </div>
    </div>
    
    </div>
  );
};

export default Timeline;
