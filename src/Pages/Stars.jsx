import React from 'react'
import { Navabr } from '../components/Navabr'
import StarsAbout from '../components/StarsAbout'
import StarsCard from '../components/StarsCard'
import { outCome1, outCome2, outCome3, outCome4, outCome5, outCome6 } from '../assets/works'
import FinalReflect from '../components/FinalReflect'
import Index from '../components/Index'

const Stars = () => {
  return (
    <>
    <Navabr />
    <StarsAbout/>
    <StarsCard header="Outcome 1" outcome={outCome1}/>
    <StarsCard header="Outcome 2" outcome={outCome2}/>
    <StarsCard header="Outcome 3" outcome={outCome3}/>
    <StarsCard header="Outcome 4" outcome={outCome4}/>
    <StarsCard header="Outcome 5" outcome={outCome5}/>
    <StarsCard header="Outcome 6" outcome={outCome6}/>
    <FinalReflect/>
    <Index />
    </>
  )
}

export default Stars