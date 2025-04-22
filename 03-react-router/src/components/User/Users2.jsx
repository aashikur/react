import React, { use } from 'react';

const Users2 = ({NormalLoadingPromise}) => { 
    const dataUser = use(NormalLoadingPromise)
    // console.log(dataUser);

    return (
        <div className="p-4 bg-pink-100 text-pink-900">
            <table className="table-auto w-full border-collapse border border-pink-300">
                <thead>
                    <tr className="bg-pink-200">
                        <th className="border border-pink-300 px-4 py-2">Name</th>
                        <th className="border border-pink-300 px-4 py-2">Email</th>
                        <th className="border border-pink-300 px-4 py-2">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataUser.map(user => (
                            <tr key={user.id} className="bg-pink-100 hover:bg-pink-200">
                                <td className="border border-pink-300 px-4 py-2 text-left">{user.name}</td>
                                <td className="border border-pink-300 px-4 py-2 text-left">{user.email}</td>
                                <td className="border border-pink-300 px-4 py-2 text-left">{user.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users2;
