import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import Slider from '../Slider/Slider'
import CollegeCard from './CollegeCard'
import ProfessorTalk from './ProfessorTalk'

const Home = () => {
  const [colleges, setCollege] = useState([]);

  useEffect(() => {
    fetch('./college.json')
      .then(res => res.json())
      .then(data => setCollege(data))
  }, [])

  // console.log(colleges)

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-2  md:mt-4">
        {
          colleges?.slice(0,3)?.map((college, idx) => <CollegeCard key={idx} college={college}></CollegeCard>)
        }
      </div>
    </div>
  )
}

export default Home
