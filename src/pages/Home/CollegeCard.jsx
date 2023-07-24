import React from 'react';
import { Link } from 'react-router-dom';

function CollegeCard({ college }) {
    const { name, id, image, admissionDate, eventsDetails, recharchesHistoryDetails, sportsDetails, rating, numOfRecherch } = college;
    // const  = eventsDetails;
    // console.log(college)

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="class image" className='w-full h-72' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    {/* <div className="badge badge-secondary">$ {rating}</div> */}
                </h2>
                <p><span className="text-xl font-semibold">Admission Date:</span> {admissionDate}</p>
                <p><span className="text-xl font-semibold">Events:</span> {eventsDetails.map(events => <span>{events.name},</span>)}</p>
                <p><span className="text-xl font-semibold">Research History:</span> {recharchesHistoryDetails.map(recharches => <span>{recharches.name},</span>)}</p>
                <p><span className="text-xl font-semibold">Sports:</span> {sportsDetails.map(sports => <span>{sports.name},</span>)}</p>
                <div>
                </div>
                <Link to={`/view-details/${id}`}>
                    <button className='btn btn-accent btn-block text-white'  >Details</button>
                </Link>
            </div>
        </div>
    )
}

export default CollegeCard
