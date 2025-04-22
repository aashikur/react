import React from 'react';
import { Link, useLoaderData } from 'react-router';

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
                        <tr className={ `${user.id%2?'bg-gray-800':''} hover:bg-gray-700`}>
                            <td className="border border-gray-700 px-4 py-2 text-left">{user.name}</td>
                            <td className="border border-gray-700 px-4 py-2 text-left">{user.email}</td>
                            <td className="border border-gray-700 px-4 py-2 text-left">{user.phone}</td>
                            <td className="border border-gray-700 px-4 py-2 text-left">
                                 <Link to={`/users/${user.id}`} className=''>details..</Link> 
                            </td>
                        </tr> 
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;