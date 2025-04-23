import React from 'react';

const ProductTable = ({ products }) => {
    return (
        <div className="p-4 bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-4">Product Total: {products.length}</h1>
            <table className="table-auto w-full border-collapse border border-gray-700">
                <thead>
                    <tr className="bg-gray-800">
                        <th className="border border-gray-700 px-4 py-2 text-left">Name</th>
                        <th className="border border-gray-700 px-4 py-2 text-left">Price</th>
                        <th className="border border-gray-700 px-4 py-2 text-left">Quantity</th>
                        <th className="border border-gray-700 px-4 py-2 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="hover:bg-gray-700">
                            <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                            <td className="border border-gray-300 px-4 py-2">{product.quantity}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                {index % 2 === 0 ? 'Checked' : 'Not-Checked'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;