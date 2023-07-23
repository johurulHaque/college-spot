import React from 'react';
import { Link } from 'react-router-dom';

const CollegeListCard = ({ college }) => {
    const { name, id, image, admissionDate, eventsDetails, recharchesHistoryDetails, sportsDetails, rating, numOfRecherch } = college;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="class image" className='w-full h-72' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">$ {rating}</div>
                </h2>
                <p><span className="text-xl font-semibold">Admission Date:</span> {admissionDate}</p>
                <p><span className="text-xl font-semibold">Events:</span> {eventsDetails.map(events => <span>{events.name},</span>)}</p>
                <p><span className="text-xl font-semibold">Research History:</span> {recharchesHistoryDetails.map(recharches => <span>{recharches.name},</span>)}</p>
                <p><span className="text-xl font-semibold">Sports:</span> {sportsDetails.map(sports => <span>{sports.name},</span>)}</p>
                <div className="card-actions justify-end">
                    <div className="badge  badge-primary badge-outline">
                        Available {rating} seats
                    </div>
                    <div className="badge  badge-accent badge-outline">
                        Total student {rating}
                    </div>
                </div>
                <div>
                </div>
                <Link to={`/college-details/${id}`}>
                    <button className='btn btn-accent btn-block text-white'  >Select</button>
                </Link>

            </div>
        </div>
    )
}

export default CollegeListCard
