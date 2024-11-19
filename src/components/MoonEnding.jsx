import React from 'react'
import { Link } from 'react-router-dom'

export const MoonEnding = () => {
  return (
    <div className="flex justify-between items-center p-4 m-10 mt-10 font-poppins">
    {/* Paragraph on the left */}
    <p className="text-3xl flex-1">
    These represent my guidance towards creating the Major Projects. The next section will guide how the moons revolve around the Planet.

    </p>

    {/* Button on the right */}
    <button className="bg-gradient-to-r from-violet-800 to-indigo-900 text-white text-3xl px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out">
      <Link to='/planet'>PLANETS</Link>
      
    </button>
  </div>
  )
}
