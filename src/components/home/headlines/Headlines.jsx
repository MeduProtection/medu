import React from 'react'

function Headlines() {
    return (
        <div className="flex flex-col items-center py-12 px-4 lg:px-12 bg-gradient-to-b from-blue-50 to-white">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Making headlines. <span className="text-blue-600">Creating change.</span>
          </h2>
          <p className="text-center mb-8 max-w-2xl">
            Medu is making news, and it's easy to see why. As the first and only medical products of its kind, we’ve received attention and accolades the world over.
          </p>
          <h3 className="text-lg font-semibold mb-4 text-center">
            As seen in:
          </h3>
          <div className="flex flex-wrap justify-center items-center space-x-4 mb-8">
            <img src="/path-to-logo1.png" alt="WSJ" className="h-8" />
            <img src="/path-to-logo2.png" alt="Bloomberg" className="h-8" />
            <img src="/path-to-logo3.png" alt="Expansión" className="h-8" />
            <img src="/path-to-logo4.png" alt="TechCrunch" className="h-8" />
            <img src="/path-to-logo5.png" alt="Waste360" className="h-8" />
          </div>
          <div className="bg-blue-500 text-white py-4 px-6 rounded-lg mb-8">
            <p className="text-center text-lg font-semibold">
              "MEDU is changing the world one gown at a time"
            </p>
            <p className="text-center mt-2">— Hillary Clinton</p>
          </div>
          <p className="text-center mb-8">
            Read our press coverage, case studies, blog, and more.
          </p>
          <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition">
            Gain Insights
          </button>
        </div>
      );
}

export default Headlines