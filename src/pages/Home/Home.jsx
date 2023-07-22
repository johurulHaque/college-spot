import React from 'react'
import Marquee from 'react-fast-marquee'
import Slider from '../Slider/Slider'
import ProfessorTalk from './ProfessorTalk'

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <ProfessorTalk></ProfessorTalk>
      <Marquee style={{ marginBottom: "25px" }} className="mt-10">
        <img src="./toy/logo1.jpg" className="w-32 h-24" />
        <img src="./toy/logo2.jpg" className="w-32 h-24" />
        <img src="./toy/logo3.jpg" className="w-32 h-24" />
        <img src="./toy/logo4.png" className="w-32 h-24" />
        <img src="./toy/logo5.png" className="w-32 h-24" />
        <img src="./toy/logo6.png" className="w-32 h-24" />
        <img src="./toy/logo7.jpg" className="w-32 h-24" />
        <img src="./toy/logo8.png" className="w-32 h-24" />
        <img src="./toy/logo9.png" className="w-32 h-24" />
      </Marquee>    
    </div>
  )
}

export default Home
