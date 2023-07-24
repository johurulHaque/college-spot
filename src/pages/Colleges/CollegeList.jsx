import React, { useEffect, useState } from 'react';
import CollegeListCard from './CollegeListCard';

const CollegeList = () => {
    const [colleges, setCollege] = useState([]);
    useEffect(() => {
      fetch('./college.json')
        .then(res => res.json())
        .then(data => setCollege(data))
    }, [])
    // const  = eventsDetails;
    console.log(colleges)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-2  md:mt-4">
            {
                colleges?.slice(0, 6)?.map((college, idx) => <CollegeListCard key={idx} college={college}></CollegeListCard>)
            }
        </div>

    )
}

export default CollegeList
