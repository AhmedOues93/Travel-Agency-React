import React from 'react'

const Booking = () => {
  return (
    
      <div className="my-10 px-6">
        <h2 className="text-3xl font-bold text-red-400 text-center mb-8">
          Why Book With Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              Curated Student Trips
            </h3>
            <p className="text-gray-600 text-xl">
              Every destination is selected to inspire, educate, and energize
              student travelers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Affordable Packages</h3>
            <p className="text-gray-600 text-xl" >
              Group rates and student discounts help you travel smart and save
              money.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Flexible Dates</h3>
            <p className="text-gray-600 text-xl">
              Travel plans built around academic calendars and exam breaks.
            </p>
          </div>
        </div>
      
    </div>
  )
}

export default Booking
