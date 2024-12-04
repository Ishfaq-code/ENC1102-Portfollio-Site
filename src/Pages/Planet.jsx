import React from 'react'
import { Navabr } from '../components/Navabr'
import PlanetAbout from '../components/PlanetAbout'
import PlanetCards from '../components/PlanetCards'
import MJ1Img from '../components/MJ1Img'
import PlanetsCard2 from '../components/PlanetsCard2'
import MJ2Imges from '../components/MJ2Imges'
import PlanetEnding from '../components/PlanetEnding'
import PlanetCard3 from '../components/PlanetCard3'
import MJ3Img from '../components/MJ3Img'

const Planet = () => {
  return (
    <>
     <Navabr/>
     <PlanetAbout/>
     <PlanetCards/>
     <MJ1Img />
     <PlanetsCard2/>
     <MJ2Imges/>
     <PlanetCard3/>
     <MJ3Img/>
    
     <PlanetEnding />
    
    </>
   
    
  )
}

export default Planet