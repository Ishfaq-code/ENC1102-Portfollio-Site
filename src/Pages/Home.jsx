import React from 'react'
import { Navabr } from '../components/Navabr'
import { About } from '../components/About'
import { Work } from '../components/Work'
import AboutMe from '../components/AboutMe'

const Home = () => {
  return (
    <>
         <Navabr />
         <About />
     
         <AboutMe/>
         <Work />
        
     
    </>
         
        
   
  )
}

export default Home