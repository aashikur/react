import React from 'react';

const FormAction = () => {
    const handleAction = (handleAction)=>{
        console.log(handleAction.get('name'))
        console.log(handleAction.get('email'))
    }
    return (
        <div className="bg-gray-800 text-white p-5 rounded-lg max-w-md mx-auto">
            <form action={handleAction}>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormAction;
