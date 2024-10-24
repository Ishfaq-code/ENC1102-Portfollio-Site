import React from 'react'
import { filesArray } from '../assets/works'

export const Work = () => {
  return (
    <div className='flex text-center justify-center items-center mt-32'>
    {
        filesArray.map((work) => (
            <div key={work.id} className='pr-4'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white h-52 w-80">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{work.title}</div>
        
              <p className="text-gray-700 text-base">{work.description}</p> 
            
            </div>
        
            <div className="h-10">
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>
          </div>
        ))
    }
 
  </div>
  )
}
