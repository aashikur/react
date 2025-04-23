import React, { Suspense } from 'react';
import { Link, useLoaderData } from 'react-router';
import UserD2 from '../UserD2/UserD2';
import SingleUser from './SingleUser';

const Users = () => {  


    const userData = useLoaderData();
    // console.log(userData);
    return (
        <div className="p-4 bg-gray-900 text-white">
            <table className="table-auto w-full border-collapse border border-gray-700">
                <thead>
                    <tr className="bg-black/50">
                        <th className="border border-gray-700 px-4 py-2">Name</th>
                        <th className="border border-gray-700 px-4 py-2">Email</th>
                        <th className="border border-gray-700 px-4 py-2">Phone</th>
                        <th className="border border-gray-700 px-4 py-2">Link</th>
                    </tr>
                </thead>
                <tbody>
                  {
                        userData.map(user => (
                                <SingleUser user={user}></SingleUser>
                        ))
                        
                    }
                                         

                </tbody>
            </table>
        </div>
    );
};

export default Users;