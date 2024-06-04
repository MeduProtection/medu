import React from 'react'

function Difference() {
    return (
        <div
          className="relative flex flex-col items-center justify-center py-20 px-4 bg-cover bg-center text-white"
          style={{ backgroundImage: "url('/assets/difference/bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-[50px] font-bold mb-4">
              The difference that <span className="text-[#95BC67]">makes a difference.</span>
            </h2>
            <p className="mb-8 max-w-2xl text-[20px]">
              Medu is not just the first of its kind. It’s the first of its kind offering a host of benefits to optimize savings of all kinds. See how Medu stacks up.
            </p>
            <button className="bg-[#95BC67] text-white py-2 px-6 rounded-full hover:bg-green-600 transition">
              Why MEDU
            </button>
          </div>
        </div>
      );
}

export default Difference