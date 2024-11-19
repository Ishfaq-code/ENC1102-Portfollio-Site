import React from 'react'

const StarsCard = ({header, outcome}) => {
  return (
    <div className="max-w-xl mx-auto bg-gradient-to-r from-violet-800 to-indigo-900  p-6 rounded-lg shadow-lg mt-10 font-poppins mb-10 text-white">
    {/* Header */}
    <h2 className="text-3xl font-semibold text-white mb-4 text-center">{header}</h2>

    {/* Paragraph */}
    <p className="text-white text-lg">
      {outcome}
    </p>
  </div>
  )
}

export default StarsCard