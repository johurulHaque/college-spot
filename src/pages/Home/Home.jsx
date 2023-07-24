import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { Helmet } from 'react-helmet-async'
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
    <>
      <Helmet>
        <title>College Spot | Home</title>
      </Helmet>

      <div>
        <Slider></Slider>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-2  md:mt-4">
          {
            colleges?.slice(0, 3)?.map((college, idx) => <CollegeCard key={idx} college={college}></CollegeCard>)
          }
        </div>

        <h2 className='text-2xl md:text-2xl md:font-semibold  mt-10 text-center'>__Professor's Talk__</h2>
        <ProfessorTalk></ProfessorTalk>

        <h2 className='text-2xl md:text-2xl md:font-semibold  mt-10 text-center'>__Our Education Partner__</h2>
        <Marquee style={{ marginBottom: "25px" }} className="mt-2">
          <img src="./collegeLogo/logo1.png" className="w-32 h-28" />
          <img src="./collegeLogo/logo2.jpg" className="w-32 h-28" />
          <img src="./collegeLogo/logo3.png" className="w-32 h-28" />
          <img src="./collegeLogo/logo4.jpg" className="w-32 h-28" />
          <img src="./collegeLogo/logo5.jpg" className="w-32 h-28" />
          <img src="./collegeLogo/logo6.jpg" className="w-32 h-28" />
          <img src="./collegeLogo/logo7.jpg" className="w-32 h-28" />
          <img src="./collegeLogo/logo8.jpg" className="w-32 h-28" />
          <img src="./collegeLogo/logo9.jpg" className="w-32 h-28" />
          <img src="./collegeLogo/logo10.jpg" className="w-32 h-28" />
        </Marquee>
      </div>
    </>
  )
}

export default Home
