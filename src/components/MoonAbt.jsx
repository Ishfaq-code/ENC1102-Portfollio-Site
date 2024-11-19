import React from 'react'
import { moonOpening } from '../assets/works'

export const MoonAbt = () => {
  return (
    <section
    className="relative h-[60vh] bg-cover bg-center font-poppins"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490814525860-594e82bfd34a?q=80&w=1495&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-55"></div>

    {/* Content */}
    <div className="relative  flex flex-col items-center justify-center text-center h-full text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        THE MOON
      </h1>
      <p className="text-lg md:text-xl max-w-2xl">{moonOpening}</p>
    </div>
  </section>
  )
}
