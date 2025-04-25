import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom'; // Updated import
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';

const ReadList = () => {
    const [readList, setReadList] = useState([]); 
    const [sort, setSort] = useState('')
    const data = useLoaderData();

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBookData = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBookData.includes(book.bookId));
        setReadList(myReadList);
    }, [data]); 

    const handleSort = type => {
        setSort(type); 
        if(type === 'pages'){
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages); 
            setReadList(sortedByPage);
        } else if (type === 'rating') {
            const sortedByRating = [...readList].sort((a, b) => b.rating - a.rating);
            setReadList(sortedByRating);
        }
    }

    return (
        <div className="p-5 bg-gray-900 text-white min-h-screen">
            <h1 className="text-3xl font-bold mb-5">ReadList Books</h1>

            <div className="dropdown my-5">
                <div tabIndex={0} role="button" className="btn m-1 bg-gray-800 text-white border-0 hover:bg-gray-700">
                    Sort By: {sort?sort:''}
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-gray-800 text-white rounded-box z-10 w-52 p-2 shadow-lg">
                    <li><a onClick={()=> handleSort('pages')} className="hover:bg-gray-700">Pages</a></li>
                    <li><a  onClick={()=> handleSort('rating')} className="hover:bg-gray-700">Ratings</a></li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                    <Tab>ReadList</Tab>
                    <Tab>WishList</Tab>
                </TabList>

                <TabPanel>
                    <h2 className="text-xl font-semibold mb-3">Books I Read: {readList.length}</h2>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-left border-collapse border border-gray-700">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="border border-gray-700 px-4 py-2">Logo</th>
                                    <th className="border border-gray-700 px-4 py-2">Title</th>
                                    <th className="border border-gray-700 px-4 py-2">Tags</th>
                                    <th className="border border-gray-700 px-4 py-2">Category</th>
                                    <th className="border border-gray-700 px-4 py-2">Total Pages</th> {/* Added Header */}
                                    <th className="border border-gray-700 px-4 py-2">Rating</th> {/* Added Header */}
                                    <th className="border border-gray-700 px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {readList.map(book => (
                                    <tr key={book.bookId} className="hover:bg-gray-800">
                                        <td className="border border-gray-700 px-4 py-2">
                                            <img src={book.image} alt={book.bookName} className="w-16 h-16 object-cover rounded" />
                                        </td>
                                        <td className="border border-gray-700 px-4 py-2">{book.bookName}</td>
                                        <td className="border border-gray-700 px-4 py-2">
                                            {book.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-block bg-gray-700 text-gray-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </td>
                                        <td className="border border-gray-700 px-4 py-2">{book.category}</td>
                                        <td className="border border-gray-700 px-4 py-2">{book.totalPages}</td> {/* Added Total Pages */}
                                        <td className="border border-gray-700 px-4 py-2">{book.rating } ⭐ </td> {/* Added Rating */}
                                        <td className="border border-gray-700 px-4 py-2">
                                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className="text-xl font-semibold">My Wish List: 4</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;