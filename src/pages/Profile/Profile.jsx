import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);    
    console.log(user)
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={user && user?.photoURL } alt="Profile Avatar" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{user && user?.displayName ? user?.displayName : "No user name found"}</h2>
                <p className='text-2xl'>Email: {user && user.email}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-success text-white">Edit Profile</button>
                </div>
            </div>
        </div>
    )
}

export default Profile
