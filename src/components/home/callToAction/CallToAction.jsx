import React from 'react'

function CallToAction() {
    return (
        <div className="flex flex-col items-center py-12 px-4 lg:px-12 bg-[#5587B6] text-white">
          <h2 className="text-[50px] font-bold mb-4 text-center">
            Change your gowns. Transform the world.
          </h2>
          <p className="text-center mb-8 max-w-2xl text-[22px]">
            Save money, time, and waste in a way never before possible. Reach out to book a meeting, learn more, and get started.
          </p>
          <button className="bg-[#1B3954] text-white py-2 px-6 rounded-full hover:bg-blue-900 transition text-[28px]">
            Get Started
          </button>
        </div>
      );
}

export default CallToAction