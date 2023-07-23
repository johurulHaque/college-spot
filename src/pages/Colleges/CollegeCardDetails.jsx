import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CollegeCardDetails = () => {
        const colleges = useLoaderData();
        const { id } = useParams();
        // const [colleges, setCollege] = useState([]);
        // useEffect(() => {
        //     fetch('./college.json')
        //         .then(res => res.json())
        //         .then(data => setCollege(data))
        //         .catch(error => console.log(error))
        // }, []);
    
        const singleCollege = colleges?.find(college => college?.id == id)
        const { name, image, admissionDate, eventsDetails, recharchesHistoryDetails, sportsDetails, rating, numOfRecherch } = singleCollege;
        // console.log(singleCollege)
        return (
            <div className="container mx-auto p-8">
                <div className="flex items-center mb-6">
                    <img src={image} alt="College Logo" className="w-16 h-16 mr-4" />
                    <h1 className="text-3xl font-semibold">{name}</h1>
                </div>    
    
                <div className="bg-white p-4 rounded-md shadow-md mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Events Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-2  md:mt-4">
                        {
                            eventsDetails.map(events => <>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure>
                                        <img src={events.image} alt="className image" className='w-full h-72' />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {events.name}
                                            {/* <div className="badge badge-secondary">$ {rating}</div> */}
                                        </h2>
                                        <p><span className="text-xl font-semibold">Details: </span><span> {events.details}</span></p>
    
                                        <div>
                                        </div>
                                    </div>
                                </div>
    
                            </>)
                        }
                    </div>
                </div>
    
    
                <div className="bg-white p-4 rounded-md shadow-md mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Sports Categories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-2  md:mt-4">
                        {
                            sportsDetails.map(sports => <>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure>
                                        <img src={sports.image} alt="className image" className='w-full h-72' />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {sports.name}
                                            {/* <div className="badge badge-secondary">$ {rating}</div> */}
                                        </h2>
                                        <p><span className="text-xl font-semibold">Details: </span><span> {sports.details}</span></p>
    
                                        <div>
                                        </div>
                                    </div>
                                </div>
    
                            </>)
                        }
    
                    </div>
                </div>   
               
            </div>
        )
    
}

export default CollegeCardDetails
