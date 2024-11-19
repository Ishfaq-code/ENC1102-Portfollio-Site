import React from 'react'
import { linksArray } from '../assets/navlinks.js'
import { Link } from 'react-router-dom'

export const Navabr = () => {
  return (
    <nav className="bg-gradient-to-r from-violet-800 to-indigo-900 text-white p-4 font-poppins">
    <div className="container mx-auto px-4 py-3">
      <div className="flex justify-center">
        <ul className="flex space-x-8">
         {linksArray.map((navlink) => (
            <li key={navlink.id}>
            <Link to={navlink.link} className="hover:text-gray-200 transition-colors duration-300 text-xl ">{navlink.title}</Link>
            </li>
         ))}
        </ul>
      </div>
    </div>
  </nav>
  )
}
