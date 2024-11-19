import React from 'react'
import { exPara } from '../assets/works'
import { Link } from 'react-router-dom'


export const Work = () => {
  return (
    <div className="text-center py-10 font-poppins">
    {/* Header with underline */}
    <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
      What to Expect in my Cosmos
      <span className="block h-1 w-20 bg-violet-600 mx-auto mt-2"></span>
    </h2>
    {/* Paragraph */}
    <p className="text-lg md:text-2xl text-black mt-7 max-w-5xl mx-auto">
      {exPara}
    </p>

    <button
      className="bg-gradient-to-r from-violet-800 to-indigo-900 text-white py-4 px-8 mt-7 text-2xl font-semibold rounded-lg shadow-lg hover:from-violet-850 hover:to-indigo-950 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
    >
      <Link to='/moon'>
        DISCOVER
      </Link>
    
    </button>

  </div>
  )
}
