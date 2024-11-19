import React from 'react'

const AboutMe = () => {
  return (
    <div className="text-center py-10 font-poppins">
    {/* Header with underline */}
    <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
      Who Am I
      <span className="block h-1 w-20 bg-violet-600 mx-auto mt-2"></span>
    </h2>
    {/* Paragraph */}
    <p className="text-lg md:text-2xl text-black mt-7 max-w-5xl mx-auto">
    I am Ishfaq, an UCF freshman majoring in Computer Science. I have always had a love-hate relationship with English and throughout ENC 1102 I felt like I was able to reflect on that relationship which improved my writing.
    </p>


  </div>
  )
}

export default AboutMe