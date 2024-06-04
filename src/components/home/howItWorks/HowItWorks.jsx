import React from 'react'

function HowItWorks() {
    return (
        <div className="flex flex-col lg:flex-row items-center py-12 px-4 lg:px-12 bg-white">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              How it <span className="text-blue-600">works.</span>
            </h2>
            <p className="text-blue-600 mb-4 font-bold">
              Reducing the cost of protective gowns by up to 80% while ensuring health and safety may sound too good to be true. But it isn’t.
            </p>
            <p className="mb-8">
              Our patent-pending, anti-viral, anti-bacterial fabric can be washed up to 50 times with conventional hospital system detergents and equipment without losing protective properties and prevents cross-contamination, enabling caregivers to dramatically reduce gown changes.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <div className="relative">
              <img src="/image.png" alt="How it works" className="max-w-full h-auto rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-75 p-4 rounded-full">
                  <svg className="h-12 w-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default HowItWorks