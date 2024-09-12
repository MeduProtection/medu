import React, { useState } from "react";

function Team() {
  const members = [
    {
      name: "Tamara Chayo Romo",
      ocupation: "CEO & Founder",
      image: "/assets/team/1.png",
      description: "Tamara is a chemical engineer who was selected as a Thiel Fellow, a Halcyon Fellow, and a Y & Y Fellow over three consecutive years. She was also awarded an Honorary Doctorate in Sustainability and Impact, testament to her commitment to the planet and its people.  Since starting MEDU, she has raised more than 4 million dollars from U.S. funds such as MaC Ventures and grants to continue MEDU's impact from 2020. In addition to transforming the fabric of medicine, Tamara seeks to support young people who are on the same path of entrepreneurship with mentoring and being an Angel Investor of other startups that, like her, seek to change the world.",
    },
    {
      name: "Alberto Yarza",
      ocupation: "COO",
      image: "/assets/team/1.png",
      description: "Curious and positive by nature, Alberto has spent the past 12 years working to optimize operations in different sectors, including marketing, energy efficiency, lighting and retail. He has been an integral part of more than five foundations, helping them bring concepts and goals to fruition. He has lived in three different countries, and is passionate about food, water sports, and reading. ",
    },
    {
      name: "Roberto Ayala",
      ocupation: "Head of Operations",
      image: "/assets/team/1.png",
      description: "Roberto is a chemical engineer with experience working in big organizations, where he performed quality audits and quality manuals. He also led quality tests of titanium oxide products and induction courses for new salesmen. A graduate of Universidad La Salle, Roberto is currently studying for a Master's degree in Administration.",
    },
    {
      name: "Jorge Rosas",
      ocupation: "Head of Marketing",
      image: "/assets/team/1.png",
      description: "Jorge graduated from Universidad La Salle with a degree in business administration, majoring  in marketing. Passionate about building relationships and developing them, Jorge is a true believer in innovation and advancement and was Medu’s first employee. Jorge is committed to helping Medu help clients break through barriers worldwide. He is also a successful content creator the other half of his life, testament to his ability to connect and inspire.",
    },
    {
      name: "David Zayas",
      ocupation: "VP of Sales",
      image: "/assets/team/1.png",
      description: "David holds an MBA from Instituto Tecnológico y de Estudios Superiores de Monterrey, a degree in Food Science Engineering, and certification in Leading People and Teams from the University of Michigan. At Medu, he drives business development and expansion efforts across North America, with a focus on healthcare and food and beverage. Before joining Medu, David spearheaded business development in Mexico and the U.S., covering industries like food and beverage, chemicals, and healthcare, crafted Proptech strategies and led teams in a variety of industry verticals. ",
    },
    {
      name: "Adriana Ávila",
      ocupation: "Product Manager",
      image: "/assets/team/1.png",
      description: "Adriana uses her experience in the application of NOMs issued by the STPS and degree in Environmental Sciences to implement safety and hygiene measures, accident prevention,  processes to ensure quality in manufacturing processes and final product.",
    },
    {
      name: "Sophia Chayo",
      ocupation: "Human Resources",
      image: "/assets/team/1.png",
      description: "This award-winning team member was recognized as the most outstanding student of the Faculty of Humanities and Social Sciences at La Salle and by the General Secretariat of the University Student Council. Sophia keeps the Medu team running strong with her human  resources expertise.  ",
    },
    {
      name: "Adrian Rosas",
      ocupation: "Account Executive",
      image: "/assets/team/1.png",
      description: "Fashion Design student, Account Executive, DJ, Music producer and entrepreneur. At MEDU Protection, Adrián specializes in cold calling and sales, helping the company expand into the healthcare and food industries with sustainable solutions. His multidisciplinary approach blends design, technological innovation, and a deep connection to the music world.",
    },
    {
      name: "Saman Mortazavi",
      ocupation: "Business Developer",
      image: "/assets/team/1.png",
      description: "Saman has vast experience in the startup & tech spectrum, helping companies scale up at a fast pace. He has worked in Unicorn companies such as Deel, Rappi and more, helping the commercial team in the go to market strategy and expansion plans. A foodie by nature, a sports enthusiast and a passionate jet setter.",
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
