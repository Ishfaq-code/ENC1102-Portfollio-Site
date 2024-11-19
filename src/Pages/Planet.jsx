import React from 'react'
import { Navabr } from '../components/Navabr'
import PlanetAbout from '../components/PlanetAbout'
import PlanetCards from '../components/PlanetCards'
import MJ1Img from '../components/MJ1Img'
import PlanetsCard2 from '../components/PlanetsCard2'
import MJ2Imges from '../components/MJ2Imges'
import PlanetEnding from '../components/PlanetEnding'

const Planet = () => {
  return (
    <>
     <Navabr/>
     <PlanetAbout/>
     <PlanetCards/>
     <MJ1Img />
     <PlanetsCard2/>
     <MJ2Imges/>
     <PlanetEnding />
    </>
   
    
  )
}

export default Planet