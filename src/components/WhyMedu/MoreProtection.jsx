import React, { useState } from 'react';

function MoreProtection() {
  const [hover, setHover] = useState("level1");
  const [click, setClick] = useState("level1");

  return (
    <div className=" mx-auto pt-[130px] lg:pt-[200px]">
      <div className="text-center mb-8 flex flex-col items-center px-4">
        <h2 className="text-2xl md:text-[50px] font-bold text-[#1B3954] mb-[29px]">
          More protection. <span className="text-[#95BC67]">Less waste.</span>
        </h2>
        <p className="text-[10px] md:text-[17px] xl:text-[21px] lg:mt-4 max-w-sm md:max-w-md lg:max-w-4xl ">
          Medu is making a difference because we are different. With the only reusable, sustainable surgical gowns and coveralls of their kind, we’re decimating waste, drastically reducing costs, and improving provider comfort.
        </p>
      </div>

      <div className="text-center mb-8 text-[#5587B6] px-4">
        <h3 className="text-2xl lg:text-[40px] font-bold">Here’s how we stack up</h3>
        <p className="text-sm lg:text-[18px] fotn-semibold lg:mt-4">Levels of Protection AN SI/AAMI PB70:2012</p>
      </div>

      <div className="w-full flex flex-row lg:justify-center gap-4 mb-12 overflow-x-scroll no-scrollbar px-8 ">
        {['level1', 'level2', 'level3', 'level4'].map((level, index) => (
          <div
            key={index}
            className={`w-[280px] h-[329px] flex-shrink-0 flex flex-col justify-center text-white text-center p-4 rounded-[49px] cursor-pointer ${
              level === 'level1' ? 'bg-[#1B3954]' :
              level === 'level2' ? 'bg-[#5587B6]' :
              level === 'level3' ? 'bg-[#5587B6]' :
              'bg-[#95BC67]'
            }`}
            onClick={() => setClick(level)}
            onMouseOver={() => setHover(level)}
            onMouseOut={() => setHover("")}
          >
            <h4 className="text-[32px] font-bold">
              LEVEL<br className={`${hover === level || click === level ? "hidden" : ""}`} /> {level.slice(-1)}
            </h4>
            <p className={`${
              hover === level || click === level ? " text-[20px] lg:text-[18px] mt-2" : "hidden"
            } transition-all duration-300`}>
              Minimal risk, to be used, for example, during basic care, standard isolation, a protective gown for visitors or in a standard medical unit.
            </p>
          </div>
        ))}
      </div>

      <div className="container mx-auto text-center text-[#1B3954] flex flex-col gap-[20px] h-full w-full ">
        <h3 className="text-2xl lg:text-[50px] font-semibold text-[#1B3954] lg:mb-6">Doing more <span className='text-[#5587B6]'>good</span>.</h3>
        <p className='text-[#1B3954] text-[20px]'>Medu offers a host of benefits:</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-4 px-4">
          <div className="bg-white text-center  rounded-[34px] shadow-md w-full h-[150px] lg:w-[218px] lg:h-[173px]  flex flex-col items-center justify-center">
            <p className="text-[55px] font-bold text-[#95BC67]">80%</p>
            <p className="text-gray-600 ">cost savings</p>
          </div>
          <div className="bg-white text-center w-full h-[150px] lg:w-[218px] lg:h-[173px] flex flex-col items-center justify-center  rounded-[34px] shadow-md ">
            <p className="text-[55px] font-bold text-[#1B3954]">90%</p>
            <p className="text-gray-600 ">waste <br/>reduction</p>
          </div>
          <div className="bg-white text-center w-full h-[150px] lg:w-[218px] lg:h-[173px] flex flex-col items-center justify-center  rounded-[34px] shadow-md">
            <p className="text-[55px] font-bold text-[#5587B6] leading-[50px]">On-time</p>
            <p className="text-gray-600 mt-2">delivery</p>
          </div>
          <div className="bg-white text-center w-full h-[150px] lg:w-[218px] lg:h-[173px] flex flex-col items-center justify-center  rounded-[34px] shadow-md">
            <p className="text-xl  ">
              The ability to see<br/> <span className='text-[55px] font-bold'> more </span> <br/>patients in less <br/>time
            </p>
          </div>
        </div>
        <div className='w-full h-full flex justify-center items-center mb-[85px]'>
        <div className="bg-white text-center w-[364px] h-[173px] flex flex-col items-center justify-center  rounded-[34px] shadow-md">
            <p className="text-[24px] leading-[40px]  ">
              Time savings of up to<br/> <span className='text-[55px] font-bold'> 2 hour </span> <br/>per doctor per week 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreProtection;
