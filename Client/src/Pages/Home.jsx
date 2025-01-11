import React from 'react'
import { Header } from '../Components/Header'
import '../Components/Home.css'
import { Steps } from '../Components/Steps'
import AboutUs from '../Components/AboutUs'
import { Trynow } from '../Components/Trynow'
export const Home = () => {
  return (
    <>
    <div>
      <Header/>
      <Steps/>
      <AboutUs/>
      <Trynow/>
    </div>
    </>
  )
}
