import React from 'react'
import { Link } from 'react-router-dom'

const PlanetEnding = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="text-center p-6 font-poppins">
      {/* Paragraph */}
      <p className="text-4xl mb-4">
      These projects display my various styles of writing, flows, ideas, and learning. They are my biggest pieces of writing for ENC 1102 and are guided by my many reader responses, which make these the planets to my writing cosmos. 

      </p>

      {/* Button */}
      <button className="bg-gradient-to-r from-violet-800 to-indigo-900  text-4xl text-white px-6 py-2 p-5 rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out">
        <Link to='/stars'>STARS</Link>
        
      </button>
    </div>
  </div>
  )
}

export default PlanetEnding