import React, { useState } from "react";

function Team() {
  const members = [
    {
      name: "Tamara Chayo Romo",
      ocupation: "CEO & Founder",
      image: "/assets/team/TamaraChayo.png",
      description: "Tamara, a Thiel Fellow and Halcyon Fellow, has raised over 4 million dollars for MEDU since 2020. Committed to sustainability, she mentors and supports young entrepreneurs while continuing to impact the medical fabric industry.",
    },
    {
      name: "Alberto Yarza",
      ocupation: "COO",
      image: "/assets/team/AlbertoYarza.png",
      description: "Alberto has spent over 12 years optimizing operations across various sectors, including marketing and retail. Passionate about food and water sports, he has lived in three countries and worked with multiple foundations.",
    },
    {
      name: "Roberto Ayala",
      ocupation: "Head of Operations",
      image: "/assets/team/RobertoAyala.png",
      description: "Roberto is a chemical engineer with experience in quality audits and manuals. A graduate of Universidad La Salle, he is currently pursuing a Master's degree in Administration while leading Medu's operations.",
    },
    {
      name: "Jorge Rosas",
      ocupation: "Head of Marketing",
      image: "/assets/team/JorgeRosas.png",
      description: "Jorge, Medu's first employee, holds a degree in business administration. He is committed to helping Medu break barriers globally and is also a successful content creator, known for building strong relationships.",
    },
    {
      name: "David Zayas",
      ocupation: "VP of Sales",
      image: "/assets/team/DavidZayas.png",
      description: "David holds an MBA and specializes in business development across North America. With experience in healthcare, food, and Proptech, he leads Medu’s expansion efforts, focusing on sustainable solutions for multiple industries.",
    },
    {
      name: "Adriana Ávila",
      ocupation: "Product Manager",
      image: "/assets/team/AdrianaAvila.png",
      description: "Adriana, an Environmental Sciences graduate, implements safety, hygiene, and quality processes to ensure manufacturing excellence at Medu. She specializes in the application of STPS-issued NOMs for workplace safety.",
    },
    {
      name: "Sophia Chayo",
      ocupation: "Human Resources",
      image: "/assets/team/ShophiaChayo.png",
      description: "Sophia, recognized for her academic excellence, is an expert in human resources. She plays a key role in keeping the Medu team running smoothly and ensuring a strong, cohesive working environment.",
    },
    {
      name: "Adrian Rosas",
      ocupation: "Account Executive",
      image: "/assets/team/AdrianRosas.png",
      description: "Adrian, a Fashion Design student and DJ, specializes in cold calling and sales at MEDU. His multidisciplinary skills help Medu expand into the healthcare and food industries with sustainable solutions.",
    },
    {
      name: "Saman Mortazavi",
      ocupation: "Business Developer",
      image: "/assets/team/Saman2.png",
      description: "Saman, with experience in startups and Unicorn companies like Deel and Rappi, helps scale businesses quickly. He is passionate about food, sports, and traveling, contributing to Medu's go-to-market strategies.",
    },
  ];
  

  const [hover, setHover] = useState(null);
  const [click, setClick] = useState(null);

  return (
    <div className="container mx-auto xl:px-8">
      <div className="text-center my-8 lg:mt-8 flex flex-col items-center">
        <h1 className="md:max-w-lg xl:max-w-2xl text-[28px] md:text-[35px] xl:text-[40px] font-bold text-[#1B3954]">
         Medu was born and a movement <span className="text-[#95BC67]">was created</span>.
        </h1>

        <h2 className="md:max-w-lg lg:max-w-2xl xl:max-w-2xl text-[15px] md:text-[20px] xl:text-[30px] font-bold text-[#5587B6] lg:mb-[29px]">
        Meet Tamara and the rest of the
        Medu team.
        </h2>
        
      </div>
      <div className="w-full flex justify-center">
      <div className="w-full flex flex-row xl:grid xl:grid-cols-3 gap-4 mb-12 overflow-x-scroll no-scrollbar p-4">
  {members.map((member, index) => (
    <div
      key={index}
      className={`relative h-[520px] w-[90%] md:w-[50%] lg:w-[424px] flex-shrink-0 flex flex-col justify-center text-white text-center p-4 rounded-[49px] cursor-pointer`}
      onClick={() => setClick(click === index ? null : index)}      
      onMouseOver={() => setHover(index)}
      onMouseOut={() => setHover(null)}
    >
      <div className="absolute w-full h-full top-0 left-0 z-10">
        <img
          src={member.image}
          alt={member.name}
          className="rounded-[49px] w-full h-full object-cover"
        />
      </div>
      <div
        className={`w-full h-full ${
          hover === index || click === index ? "bg-[#1B3954] opacity-70" : ""
        } absolute top-0 left-0 z-20 rounded-[49px]`}
      />
      <div className="w-[90%] absolute bottom-20 z-30">
        <h4
          className={` font-bold ${
            hover !== index && click !== index
              ? "text-[17px] lg:text-[27px] bg-[#0c113742] backdrop-blur-lg text-left  pl-8"
              : "text-[20px] lg:text-[30px] text-center"
          } rounded-[20px]  py-4`}
        >
          {member.name}
          <br className={`${hover === index || click === index ? "hidden" : ""}`} />
          <p className={`${
            hover === index || click === index ? "hidden" : "text-[10px] lg:text-[18px]"
          }`}>
            {member.ocupation}
          </p>
        </h4>
        <p
          className={`${
            hover === index || click === index ? "text-[18px] mt-2" : "hidden"
          } transition-all duration-300`}
        >
          {member.description}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}

export default Team;
