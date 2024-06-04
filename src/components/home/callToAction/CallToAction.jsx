import React from 'react'

function CallToAction() {
    return (
        <div className="flex flex-col items-center py-12 px-4 lg:px-12 bg-blue-600 text-white">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Change your gowns. Transform the world.
          </h2>
          <p className="text-center mb-8 max-w-2xl">
            Save money, time, and waste in a way never before possible. Reach out to book a meeting, learn more, and get started.
          </p>
          <button className="bg-blue-800 text-white py-2 px-6 rounded-full hover:bg-blue-900 transition">
            Get Started
          </button>
        </div>
      );
}

export default CallToAction