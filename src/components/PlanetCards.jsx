import React from 'react'
import { planetMR11, planetMR12 } from '../assets/works'

const PlanetCards = () => {
  return (
    <div className="flex justify-center items-center space-x-8 mt-10 font-poppins mb-10">
    {/* First Card */}
    <div className="max-w-xl p-6 bg-white border-2 border-violet-700 text-center rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Major Project 1: Portrait of a Writer -- First Draft </h2>
      <p className="text-lg">{planetMR11}</p>
    </div>

    {/* Arrow */}
    <div className="flex items-center">
      <span className="text-4xl font-bold text-gray-500">→</span>
    </div>

    {/* Second Card */}
    <div className="max-w-xl text-center p-6 bg-white border-2 border-violet-700 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Major Project 1: Portrait of a Writer -- Final Draft</h2>
      <p className="text-lg">{planetMR12}</p>
    </div>
  </div>
  )
}

export default PlanetCards