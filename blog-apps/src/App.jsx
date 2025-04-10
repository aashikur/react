import Navbar from './components/Navbar/Navbar'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'

function App() {

  const [theTitle, setTheTitle] = useState([]);
  const[readTime,setReadTime] = useState(0);

  const handleBookMarks = (blog) => {
    const { title,ID,reading_time } = blog;
    setTheTitle([...theTitle, {title,ID,reading_time}]) 
    } 

    const handleReadTime = (blog) => { 
      const {reading_time,ID} = blog; 

     const updatedTitle =  theTitle.filter(updateTitle => updateTitle.ID != ID)
     setTheTitle(updatedTitle);
      
      console.log(ID,theTitle)
      
      setReadTime(readTime+reading_time);
      // console.log("Time is: ", time);
    }

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex py-10 gap-10">
        <div className="left-side w-8/12">
          <Blogs handleReadTime={handleReadTime} handleBookMarks={handleBookMarks}></Blogs>
        </div>
        <div className="right-side w-4/12">
          <div className='sticky top-0'>
            <h2 className='border rounded-md bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 font-bold text-xl px-10 py-5 mb-2'>
              Activity: 
              <span className='px-4 rounded-md ml-2 text-[.91rem] btn'> Book Mark-({theTitle.length}),</span>
      
              <span className='px-4 rounded-md ml-2 text-[.91rem] btn'> Reading Time-({Math.round(readTime/60)}m)</span> 
            </h2>


            {
              theTitle.map((SingleTitle, index) => <p key={index}
                className={index % 2 ? 'p-2 pl-4 mb-1 border border-gray-700 rounded-md bg-blue-400/25' : 'p-2 pl-4 mb-1 border border-gray-700 rounded-md bg-teal-500/25'} >
                ## {SingleTitle.title}
              </p>)
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default App



