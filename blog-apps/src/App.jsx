import Navbar from './components/Navbar/Navbar'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'

function App() {

  const [theTitle, setTheTitle] = useState([]);


  const handleBookMarks = (blog) => {
    const { title } = blog;

    setTheTitle([...theTitle, title])
    console.log('Book Mark Added ->', theTitle)
  }

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex py-10 gap-10">
        <div className="left-side w-8/12">
          <Blogs handleBookMarks={handleBookMarks}></Blogs>
        </div>
        <div className="right-side w-4/12">
          <div className='sticky top-0'>
            <h1 className='border rounded-md bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 font-bold text-2xl px-10 py-5 mb-2'>
              Activity:</h1>


            {
              theTitle.map((SingleTitle, index) => <p key={index}
                className={index % 2 ? 'p-2 pl-4 mb-1 border border-gray-700 rounded-md bg-blue-400/25' : 'p-2 pl-4 mb-1 border border-gray-700 rounded-md '} >
                ## {SingleTitle}
              </p>)
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default App



