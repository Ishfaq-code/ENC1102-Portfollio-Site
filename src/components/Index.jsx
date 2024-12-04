import React from 'react'
import { allLinks } from '../assets/works'

const Index = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-40 mb-10 mx-10">
    <div className="text-center font-poppins">
      {/* Header */}
      <h2 className="text-4xl font-semibold mb-4 text-violet-800">Index, Links to All Files</h2>

      {/* Paragraph */}
      <div className='flex flex-col items-center space-y-4 '>
      {allLinks.map((item, key) => (
         <a
         href={item.link}
         target="_blank"
        rel="noopener noreferrer"
         key={key}
         className="px-4 py-2 p-6 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-200"
       >
         {item.title}
       </a>
     ))}
      </div>

    </div>
  </div>
  )
}

export default Index