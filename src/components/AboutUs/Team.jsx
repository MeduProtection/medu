import React, { useState } from "react";

function Team() {
  const members = [
    {
      name: "Tamara Chayo Romo",
      ocupation: "CEO & Founder",
      image: "/assets/team/1.png",
      description: "Jorge graduated from Universidad La Salle with a degree in business administration, majoring in marketing. Passionate about building relationships and developing them, Jorge is a true believer in innovation and advancement and was Medu’s first employee. Jorge is committed to helping Medu help clients break through barriers worldwide. He is also a successful content creator the other half of my life, testament to his ability to connect and inspire.",
    },
    {
      name: "Alberto Yarza",
      ocupation: "COO",
      image: "/assets/team/1.png",
      description: "Jorge graduated from Universidad La Salle with a degree in business administration, majoring in marketing. Passionate about building relationships and developing them, Jorge is a true believer in innovation and advancement and was Medu’s first employee. Jorge is committed to helping Medu help clients break through barriers worldwide. He is also a successful content creator the other half of my life, testament to his ability to connect and inspire.",
    },
    {
      name: "Jorge Rosas",
      ocupation: "Business Developer",
      image: "/assets/team/1.png",
      description: "Jorge graduated from Universidad La Salle with a degree in business administration, majoring in marketing. Passionate about building relationships and developing them, Jorge is a true believer in innovation and advancement and was Medu’s first employee. Jorge is committed to helping Medu help clients break through barriers worldwide. He is also a successful content creator the other half of my life, testament to his ability to connect and inspire.",
    },
    {
      name: "Adriana Ávila",
      ocupation: "Product Manager",
      image: "/assets/team/1.png",
      description: "Jorge graduated from Universidad La Salle with a degree in business administration, majoring in marketing. Passionate about building relationships and developing them, Jorge is a true believer in innovation and advancement and was Medu’s first employee. Jorge is committed to helping Medu help clients break through barriers worldwide. He is also a successful content creator the other half of my life, testament to his ability to connect and inspire.",
    },
    {
      name: "Adriana Ávila",
      ocupation: "Product Manager",
      image: "/assets/team/1.png",
      description: "Jorge graduated from Universidad La Salle with a degree in business administration, majoring in marketing. Passionate about building relationships and developing them, Jorge is a true believer in innovation and advancement and was Medu’s first employee. Jorge is committed to helping Medu help clients break through barriers worldwide. He is also a successful content creator the other half of my life, testament to his ability to connect and inspire.",
    },
    {
      name: "Sophia Chayo",
      ocupation: "Human Resources",
      image: "/assets/team/1.png",
      description: "Jorge graduated from Universidad La Salle with a degree in business administration, majoring in marketing. Passionate about building relationships and developing them, Jorge is a true believer in innovation and advancement and was Medu’s first employee. Jorge is committed to helping Medu help clients break through barriers worldwide. He is also a successful content creator the other half of my life, testament to his ability to connect and inspire.",
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

        <h2 className="md:max-w-lg lg:max-w-2xl xl:max-w-2xl text-[28px] md:text-[20px] xl:text-[30px] font-bold text-[#5587B6] lg:mb-[29px]">
        Meet Tamara and the rest of the
        Medu team.
        </h2>
        
      </div>
      <div className="w-full flex justify-center">
      <div className="w-full flex flex-row xl:grid xl:grid-cols-3 gap-4 mb-12 overflow-x-scroll no-scrollbar p-4">
  {members.map((member, index) => (
    <div
      key={index}
      className={`relative h-[520px] w-full md:w-[50%] lg:w-[424px] flex-shrink-0 flex flex-col justify-center text-white text-center p-4 rounded-[49px] cursor-pointer`}
      onClick={() => setClick(index)}
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
