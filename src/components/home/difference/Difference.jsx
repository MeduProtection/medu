import React from 'react'

function Difference() {
    return (
        <div
          className="relative flex flex-col items-center justify-center py-20 px-4 bg-cover bg-center text-white"
          style={{ backgroundImage: "url('/image.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4">
              The difference that <span className="text-green-500">makes a difference.</span>
            </h2>
            <p className="mb-8 max-w-2xl">
              Medu is not just the first of its kind. It’s the first of its kind offering a host of benefits to optimize savings of all kinds. See how Medu stacks up.
            </p>
            <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition">
              Why MEDU
            </button>
          </div>
        </div>
      );
}

export default Difference