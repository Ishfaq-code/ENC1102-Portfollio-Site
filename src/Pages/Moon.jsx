import React from 'react'
import { Navabr } from '../components/Navabr'
import { MoonAbt } from '../components/MoonAbt'
import ReaderResponseCard from '../components/ReaderResponseCard'
import { majorProj3RR, moonMR1, moonMR2 } from '../assets/works'
import { MoonEnding } from '../components/MoonEnding'



const Moon = () => {
  return (
    <>
        <Navabr />
        <MoonAbt />
       
          <ReaderResponseCard header="Major Project 1 Reader Response" paragraph={moonMR1} imagelink1="/images/Lamontimgopener.png" imagelink2="/images/Lamontimgtwo.png"/>
          <ReaderResponseCard header="Major Project 2 Reader Response" paragraph={moonMR2} imagelink1="/images/wardle.png" imagelink2="/images/wardle2.png"/>
          <ReaderResponseCard header="Major Project 3 Reader Response" paragraph={majorProj3RR} imagelink1="/images/downs1.png" imagelink2="/images/downs2.png"/>

          <MoonEnding />
   
      
        
    </>
  )
}

export default Moon