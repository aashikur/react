
import './App.css'
import Counter from './Counter'
import Bating from './Bating'
import { Suspense, useState } from 'react';
import User from './Users'
import Friends from './Friends'

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

const fetchFriends = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json()
} 


function App() {

  const friendPromise = fetchFriends();
  
  return (
    <>
      <h1>Part 2</h1>

      <Suspense fallback={<h3 className='card'>Loading...</h3>  }>
            <User FetchUser={FetchUser}></User>
      </Suspense>

    <Suspense fallback={<h3 className='card'>Friends Are comming..</h3>}>
      <Friends friendPromise={friendPromise}></Friends>
    </Suspense>

      <Counter></Counter> 
      <Bating></Bating>

    </>
  )
}












export default App 