import { useContext } from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import "./Navbar.css";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/login')
      })
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/colleges">Colleges</Link>
      </li>
      <li>
        <Link to="/admission"> Admission</Link>
      </li>    
      <li>
        <Link to="/myCollege"> My College</Link>
      </li>      
    </>
  );

  return (
    <>
      <div className="navbar bg-black bg-opacity-50 max-w-screen-xl text-white">
        <div className="navbar-start z-10">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-50 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/">
            <div className="flex justify-center items-center gap-2">
              <img src="./logo.png" alt="" className="w-10 md:w-16" />
              <span className="font-extrabold text-transparent text-xl md:text-2xl md: bg-clip-text bg-gradient-to-r from-purple-400 to-amber-500">
                College Spot
              </span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-2xl">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img
                src={user.photoURL}
                referrerPolicy="no-referrer"
                alt=""
                className="w-10 h-10 rounded-full"
                title={user.displayName}
              />

              <button
                onClick={handleLogOut}
                className="btn btn-sm btn-warning btn-outline"
              >
                LogOut <FaSignOutAlt></FaSignOutAlt>
              </button>
            </>
          ) : (
            <>
              <li className="list-none">
                <Link
                  to="/login"
                  className="btn btn-sm btn-active text-white btn-accent"
                >
                  <FaSignInAlt></FaSignInAlt> Login
                </Link>
              </li>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;


import React from 'react';

function CollegeCard({college}) {    
    const {name,image,admissionDate,eventsDetails,recharchesHistoryDetails,sportsDetails,rating,numOfRecherch} = college;
    console.log(college)

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="class image" className='w-full h-72' />
            </figure>
            <div className="card-body" style={{ background: (numOfRecherch) ? '' : 'red' }}>
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">$ {rating}</div>
                </h2>
                <p><span className="text-xl font-semibold">Admission Date:</span> {admissionDate}</p>
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
            </div>
        </div>
    )
}

export default CollegeCard

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
    {/* <Link to={`/view-details/${id}`}>
<button className='btn btn-accent btn-block text-white'  >Select</button>
</Link> */}

</div>
</div>


<div className="bg-white p-4 rounded-md shadow-md mb-4">
<h2 className="text-2xl font-semibold mb-2">Research Works</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-2  md:mt-4">
    {
        recharchesHistoryDetails.map(recharche => <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={recharche.image} alt="className image" className='w-full h-72' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {recharche.name}
                        {/* <div className="badge badge-secondary">$ {rating}</div> */}
                    </h2>
                    <p><span className="text-xl font-semibold">Details: </span><span> {recharche.details}</span></p>

                    <div>
                    </div>
                </div>
            </div>

        </>)
    }

</div>
</div>
