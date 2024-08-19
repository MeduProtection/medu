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
      <div className="text-center mb-8 flex flex-col items-center">
        <h1 className="text-[40px] font-bold text-[#5587B6]">
          Our care instructions
        </h1>

        <h2 className="max-w-2xl text-[50px] md:text-[50px] font-bold text-[#1B3954] mb-[29px]">
          Take care of the planet and{" "}
          <span className="text-[#95BC67]">each other</span>
        </h2>
        <p className="text-[20px] my-4 max-w-4xl ">
          Medu gowns are as easy to use as they are to love. They need no
          special detergents or laundry equipment, and can be washed 50+ times
          at 60°C (140° F).
          <br />
          <br />
          To ensure accurate tracking of washings, Medu offers the Protect app.
        </p>
        <p className="max-w-lg text-[20px] font-bold text-[#5587B6] text-center">
          Know the age and stage of your Medu gowns and coveralls in four easy
          steps:
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-3 gap-4 mb-12">
          {members.map((member, index) => (
            <div
              key={index}
              className={`relative w-[424px] h-[520px] flex flex-col justify-center text-white text-center p-4 rounded-[49px] cursor-pointer`}
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
                  hover === index || click === index ? "bg-[#1B3954]" : ""
                } opacity-70 absolute top-0 left-0 z-20 rounded-[49px]`}
              />
              <div className="relative z-30">
                <h4 className="text-[32px] font-bold">
                  {member.name}
                  <br
                    className={`${
                      hover === index || click === index ? "hidden" : ""
                    }`}
                  />
                </h4>
                <p
                  className={`${
                    hover === index || click === index
                      ? "text-[18px] mt-2"
                      : "hidden"
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
