import React from 'react'

function Instructions() {

    const steps = [
        {
            title: 'Step 1',
            number: '1',
            description: <p>Download the Medu Protect app and register your e-mail to create an <br/> account.</p>
        },
        {
            title: 'Step 2',
            number: '2 ',
            description: <p>Scan your suits in a practical way, bring your device close to the suit to register the wash.</p>
        },
        {
            title: 'Step 3',
            number: '3',
            description: <p>View the life status <br/> of  your suits, check the number of scanned washes in <br/> real time.</p>
        },
        {
            title: 'Step 4',
            number: '4',
            description: <p>Easily manage your suits and rate their quality after each wash.</p>
        }
    ]

  return (
    <div className="container mx-auto pt-[200px] xl:px-8">
      <div className="text-center mb-8 flex flex-col items-center">
      
        <h1 className="text-[40px] font-bold text-[#5587B6]">Our care instructions</h1>
   
        <h2 className="max-w-2xl text-[50px] md:text-[50px] font-bold text-[#1B3954] mb-[29px]">
        Take care of the planet and <span className="text-[#95BC67]">each other</span>
        </h2>
        <p className="text-[20px] my-4 max-w-4xl ">
        Medu gowns are as easy to use as they are to love. They need no special detergents or laundry equipment, and can be washed 50+ times at 60°C (140° F).<br/><br/>
        To ensure accurate tracking of washings, Medu offers the Protect app. 
        </p>
        <p className="max-w-lg text-[20px] font-bold text-[#5587B6] text-center">Know the age and stage of your Medu gowns and coveralls in four easy steps:</p>
      </div>
      <div className='w-full h-full grid grid-cols-2 lg:grid-cols-4 '>
        {
            steps.map((step, index) => (
                <div key={index} className='h-[329px] w-[280px] bg-[#1B3954] flex flex-col px-8 pt-8 rounded-[49px] relative'>
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