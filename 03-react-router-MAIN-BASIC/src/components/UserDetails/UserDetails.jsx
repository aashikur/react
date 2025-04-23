import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => { 
    const user  = useLoaderData() 
   
    const {userID} = useParams();
    console.log(userID)

    // console.log(user);
    let age = (user.id * 16 ) % 100;
    return (
        <div className="p-6 my-6 max-w-sm mx-auto bg-gray-800 rounded-xl shadow-md space-y-4">
            <div className="flex items-center space-x-4">
                <img
                    className="h-16 w-16 rounded-full border border-gray-700"
                    src="https://i.ibb.co.com/KzNX4hQq/side-icon.png"
                    alt="Profile"
                />
                <div>
                    <h2 className="text-xl font-semibold text-white">{user.name}</h2>
                    <p className="text-gray-400">{user.email}</p>
                </div>
            </div>
            <div className="space-y-2">
                <p className="text-gray-300">
                    <span className="font-medium text-white">Age: </span>{age}
                </p>
                <p className="text-gray-300">
                    <span className="font-medium text-white">Married:</span> Yes
                </p>
            </div>
        </div>
    );
};

export default UserDetails;