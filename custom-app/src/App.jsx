
import './App.css'
import Counter from './Counter'
import Bating from './Bating'
import { Suspense, useState } from 'react';
import User from './Users'


  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then(res => res.json())
  // .then(data => userData(data));


// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res =>res.json());

// const fetchFriends = async ()=>{
// const res = await fetch('https://jsonplaceholder.typicode.com/users')
// return res.json();
// }



const FetchUser = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

function App() {

  
  return (
    <>
      <h1>Part 2</h1>

      <Suspense fallback={<h3>Loading...</h3>  }>
            <User FetchUser={FetchUser}></User>
      </Suspense>


      <Counter></Counter> 
      <Bating></Bating>

    </>
  )
}












export default App 