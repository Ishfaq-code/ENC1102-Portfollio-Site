import React from 'react'
import { opPara } from '../assets/works'

export const About = () => {
  return (
    <section
    className="relative h-[60vh] bg-cover bg-center font-poppins"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=2707&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-75"></div>

    {/* Content */}
    <div className="relative  flex flex-col items-center justify-center text-center h-full text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        THE WRITING COSMOS
      </h1>
      <p className="text-lg md:text-xl max-w-2xl">{opPara}</p>
    </div>
  </section>
  )
}
