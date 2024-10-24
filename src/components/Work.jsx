import React from 'react'
import { filesArray } from '../assets/works'

export const Work = () => {
  return (
    <div className='flex text-center justify-center items-center mt-32'>
    {
        filesArray.map((work) => (
            <div key={work.id} className='pr-4 text-white'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-600 h-56 w-80">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{work.title}</div>
        
              <p className=" text-base">{work.description}</p> 

              <a href={work.link} target='_blank'>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-5 rounded hover:bg-blue-700">
                View 
              </button>
              </a>
            
            
            </div>
        
            
           
          </div>
          </div>
        ))
    }
 
  </div>
  )
}
