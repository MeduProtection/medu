import { AppContext } from '@/Context/AppContext';
import React, { useContext } from 'react'

function Instructions() {
    const { traduccion } = useContext(AppContext);
    

  return (
    <div className=" mx-auto pt-[130px] lg:pt-[200px] xl:px-8">
      <div className="text-center mb-8 flex flex-col items-center px-4 lg:px-0 ">
      
        <h1 className=" text-[17px] md:text-[27px] xl:text-[34px] font-bold text-[#5587B6]">{traduccion.howItWorks.instructions.titles.mainTitle}</h1>
   
        <h2 className="max-w-sm md:max-w-lg lg:max-w-2xl text-[28px] md:text-[45px] xl:text-[50px] font-bold text-[#1B3954] mb-4 lg:mb-[29px]">
        {traduccion.howItWorks.instructions.titles.subTitle[0]} <span className="text-[#95BC67]">{traduccion.howItWorks.instructions.titles.subTitle[1]} </span>
        </h2>
        <p className="max-w-sm md:max-w-lg text-[10px] md:text-[17px] xl:text-[21px] lg:my-4 lg:max-w-4xl ">
        {traduccion.howItWorks.instructions.descriptions.intro[0]}<br/><br/>
        {traduccion.howItWorks.instructions.descriptions.intro[1]}
        </p>
        <p className="max-w-sm md:max-w-md lg:max-w-lg text-[10px] md:text-[17px] xl:text-[21px] font-bold text-[#5587B6] text-center">{traduccion.howItWorks.instructions.descriptions.stepsIntro}</p>
      </div>
      <div className='container mx-auto w-full flex flex-row xl:justify-center  overflow-x-scroll overflow-y-hidden no-scrollbar px-8 gap-4  '>
        {
            traduccion?.howItWorks?.instructions?.steps.map((step, index) => (
                <div key={index} className='h-[329px] w-[280px] flex-shrink-0 bg-[#1B3954] flex flex-col px-8 pt-8 rounded-[49px] relative'>
                    <h3 className="text-[32px] font-bold text-[#4E88B0] text-left">{step.title}</h3>
                    <div className="text-[20px] mt-2 text-white">{step.description}</div>
                    <span className='text-[#4E88B04F] text-[128px] absolute -bottom-8 right-8 font-bold '>{step.number}</span>
                </div>
            ))
        }

      </div>

       
     

   
       </div>
      
      

  )
}

export default Instructions