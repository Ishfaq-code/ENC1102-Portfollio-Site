import React from 'react'

const ReaderResponseCard = ({header, paragraph, imagelink1, imagelink2}) => {
  return (
    <div className="flex justify-center items-start space-x-6">
  {/* Card Section */}
  <div className="max-w-xl w-full font-poppins border-2 border-violet-700 mb-20 bg-white rounded-lg shadow-[0_4px_30px_rgba(128,0,128,0.5)] p-6 mt-10 hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
    {/* Header */}
    <h2 className="text-4xl font-semibold text-center mb-4">{header}</h2>

    {/* Paragraph */}
    <p className="text-lg mb-4">{paragraph}</p>
  </div>

  {/* Image Section */}
  <div className="w-1/3 p-3">
    <img
      src={imagelink1}
      alt="Placeholder 1"
      className="border-2 border-violet-700 m-3 rounded-lg w-full h-auto object-cover"
    />
    <img
      src={imagelink2}
      alt="Placeholder 2"
      className="border-2 m-3 border-violet-700 rounded-lg w-full h-auto object-cover"
    />
  </div>
</div>

 
)
}

export default ReaderResponseCard