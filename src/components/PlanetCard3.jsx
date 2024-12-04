import React from 'react'
import { MJ31, MJ32 } from '../assets/works'

const PlanetCard3 = () => {
  return (
    <div className="flex justify-center items-center space-x-8 mt-10 font-poppins mb-10">
    {/* First Card */}
    <div className="max-w-xl p-6 bg-white border-2 border-violet-700 text-center rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Major Project 3: Rhetorical Analysis of a Previous Project -- First Draft </h2>
      <p className="text-lg">{MJ31}</p>
    </div>

    {/* Arrow */}
    <div className="flex items-center">
      <span className="text-4xl font-bold text-gray-500">→</span>
    </div>

    {/* Second Card */}
    <div className="max-w-xl text-center p-6 bg-white border-2 border-violet-700 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Major Project 3: Rhetorical Analysis of a Previous Project -- Final Draft</h2>
      <p className="text-lg">{MJ32}</p>
    </div>
  </div>
  )
}

export default PlanetCard3