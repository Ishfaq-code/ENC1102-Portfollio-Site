import React from 'react'

export const Navabr = () => {
  return (
    <nav className="bg-slate-600 shadow-md text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        {/* Company Name */}
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold">Ishfaq Mohsin</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="">
            Home
          </a>
          <a href="#" className="">
            About
          </a>
          <a href="#" className="">
            My Works
          </a>
       
        </div>
      </div>
    </div>
  </nav>
  )
}
