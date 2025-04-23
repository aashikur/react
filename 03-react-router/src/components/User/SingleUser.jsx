import React, { Suspense, useState } from 'react';
import UserD2 from '../UserD2/UserD2';
import { Link } from 'react-router';

const SingleUser = ({user}) => {
    const [ShowInfo, setShowInfo] = useState(false) 
     const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`).then(res=>res.json())

    return ( 
                        <tr className={ `${user.id%2?'bg-gray-800':''} hover:bg-gray-700`}>
                            <td className="border border-gray-700 px-4 py-2 text-left">{user.name}</td>
                            <td className="border border-gray-700 px-4 py-2 text-left">{user.email}</td>
                            <td className="border border-gray-700 px-4 py-2 text-left">{user.phone}</td>
                            <td className="border border-gray-700 px-4 py-2 text-left">
                                 <Link to={`/users/${user.id}`} className=''>details..</Link> 
                                 <button onClick={()=> setShowInfo(!ShowInfo)} className='mx-2 w-25'>{ShowInfo?'Hide':'Show'}</button>
                                 {
                              ShowInfo && <Suspense fallback={
            <div className="mx-auto my-3 w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>

                              }>
                               
                                    <UserD2 userPromise={userPromise}></UserD2> 
                                    
                                </Suspense>
                            } 
                            </td>
                        </tr>     );
};

export default SingleUser;