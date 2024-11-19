import React from 'react'
import { finalReflection } from '../assets/works'

const FinalReflect = () => {
  return (
    <div className="flex justify-center items-center mt-40 mb-10 mx-10">
    <div className="text-center font-poppins">
      {/* Header */}
      <h2 className="text-4xl font-semibold mb-4 text-violet-800">Final Thoughts</h2>

      {/* Paragraph */}
      <p className="text-lg">
        {finalReflection}
      </p>
    </div>
  </div>
  )
}

export default FinalReflect