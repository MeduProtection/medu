import React from 'react'

function Headlines() {
    return (
        <div className="flex flex-col items-center lg:py-12  ">
          <h2 className="text-[2px]text-[50px] font-bold mb-4 text-center text-[#1B3954]">
            Making headlines. <br className='lg:hidden'/><span className="text-[#5587B6]">Creating change.</span>
          </h2>
          <p className="text-center mb-8 max-w-2xl text-[10px] lg:text-[20px] px-10">
            Medu is making news, and it&apos;s easy to see why. As the first and only medical products of its kind, we&apos;ve received attention and accolades the world over.
          </p>
          <h3 className="text-lg font-semibold mb-4 text-center text-[#5587B6]">
            As seen in:
          </h3>
          <div className="flex flex-wrap justify-center items-center space-x-4 gap-x-[30px] lg:gap-x-[56px] ">
            <a href="https://venturecapital.cmail19.com/t/ViewEmail/d/59087F56673457FF2540EF23F30FEDED/DC774908B0D14D50D57E886DBB2F7C8E?alternativeLink=False"  
            target="_blank"
            >
            <img src="/assets/headlines/wsj.png" alt="WSJ" className="w-[44px] h-[26px] lg:h-8" />
            </a>
            <a href="https://www.bloomberglinea.com/2022/08/31/mexicana-de-22-anos-recibe-us4-m-para-su-startup-de-indumentaria-medica-sustentable/
"  
            target="_blank"
            >
            <img src="/assets/headlines/bloomberg.png" alt="Bloomberg" className="h-[16px] w-[87px] lg:h-8" />
            </a>
            <a href="https://expansion.mx/revista-digital-abril-2023"  
            target="_blank"
            >
            <img src="/assets/headlines/espansion.svg" alt="Expansión" className="w-[89px] h-[13px]  lg:h-8" />
            </a>
            <a href="https://techcrunch.com/2022/08/30/medu-4m-reusable-ppe/"  
            target="_blank"
            >
            <img src="/assets/headlines/techCrunch.svg" alt="TechCrunch" className="w-[91px] h-[13px]lg:h-8" />
            </a>
            <a href="https://www.waste360.com/medical-waste/medu-s-answer-to-personal-protective-equipment-waste"  
            target="_blank"
            >
            <img src="/assets/headlines/waste.png" alt="Waste360" className="w-[80px] h-[80px] lg:h-[173px]" />
            </a>
          </div>
          <div className="bg-[#5587B6] text-white py-4 px-6 rounded-lg mb-8 w-full">
            <p className="text-center text-[12px] lg:text-[36px] font-semibold italic">
            &apos;&apos;MEDU is changing the world one gown at a time&apos;&apos;
            </p>
            <p className="text-center mt-2 text-[8px] lg:text-[22px]">— Hillary Clinton</p>
          </div>
          <p className="text-center mb-8 text-[10px] lg:text-[20px] text-[#1B3954] font-bold">
            Read our press coverage, case studies, blog, and more.
          </p>
          <button className="bg-[#95BC67] text-white py-4 px-8 rounded-full hover:bg-green-600 transition text-[14px] lg:text-[22px]">
            Gain Insights
          </button>
        </div>
      );
}

export default Headlines