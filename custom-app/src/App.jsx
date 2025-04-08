
import './App.css'
import Counter from './Counter'
import Bating from './Bating'
<<<<<<< HEAD
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
=======
import Users from './user'
import { Suspense } from 'react';


>>>>>>> 8550e4c0f16fc69963edee48a1d8dd27c86401fc

function App() {

  
  return (
    <>
      <h1>Part 2</h1>

      <Suspense fallback={<h3>Loading...</h3>  }>
            <User FetchUser={FetchUser}></User>
      </Suspense>


      <Counter></Counter> 
<<<<<<< HEAD
      <Bating></Bating>

=======
      <Bating></Bating> 
      
      <Suspense fallback={<h3>Loading...</h3>}>
      <Users></Users> 
      </Suspense> 
      
>>>>>>> 8550e4c0f16fc69963edee48a1d8dd27c86401fc
    </>
  )
}













export default App 