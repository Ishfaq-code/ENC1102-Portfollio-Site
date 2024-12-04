import React from 'react'

const MJ3Img = () => {
  return (
    <div className="flex justify-center items-center space-x-8">
    {/* Left Section with Images */}
    <div className="flex flex-col items-center space-y-4">
      <img 
        src="/images/mj311.png" 
        alt="Left Image 1" 
        className="w-96 rounded-lg shadow-lg border-2 border-violet-700"
      />

<img 
        src="/images/MJ312.png" 
        alt="Left Image 1" 
        className="w-96 rounded-lg shadow-lg border-2 border-violet-700"
      />
 
    </div>

    {/* Arrow in the middle */}
    <div className="flex items-center">
      <span className="text-4xl font-bold text-gray-500">→</span>
    </div>

    {/* Right Section with an Image */}
    <div className="flex flex-col items-center">
    <img 
        src="/images/mj321.png" 
        alt="Left Image 1" 
        className="w-96 rounded-lg shadow-lg border-2 border-violet-700"
      />

<img 
        src="/images/mj322.png" 
        alt="Left Image 1" 
        className="w-96 rounded-lg shadow-lg border-2 border-violet-700"
      />
    </div>
  </div>
    
      

  )
}

export default MJ3Img