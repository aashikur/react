
import './App.css'
import Counter from './Counter'
import Bating from './Bating'
import { Suspense, useState } from 'react';
import User from './Users'
import Friends from './Friends'
import Posts from './Posts'

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => userData(data));


// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res =>res.json());

// const fetchFriends = async ()=>{
// const res = await fetch('https://jsonplaceholder.typicode.com/users')
// return res.json();
// }


//  User fetch ~ Regular
const FetchUser = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());


// Friend fetch ~ async ~ await
const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json()
}


// post fetch 
const FetchPost = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

function App() {

  const friendPromise = fetchFriends();

  return (
    <>
    
    <h1>Post: </h1>
      <Suspense fallback={<h3 className='card'>POST Loading..</h3>}>
          <Posts className='card' FetchPost={FetchPost}></Posts>
      </Suspense>



      <h1>USER : </h1>
      <Suspense fallback={<h3 className='card'>Loading...</h3>}>
        <User FetchUser={FetchUser}></User>
      </Suspense>

      <h1>Friends : </h1>
      <Suspense fallback={<h3 className='card'>Friends Are comming..</h3>}>
        <Friends friendPromise={friendPromise}></Friends>
      </Suspense>


      <Counter></Counter>
      <Bating></Bating>

    </>
  )
}












export default App 