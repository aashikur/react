
import './App.css'
import Counter from './Counter'
import Bating from './Bating'
import Users from './user'
import { Suspense } from 'react';



function App() {

  return (
    <>
      <h1>Part 2</h1>

      <Counter></Counter> 
      <Bating></Bating> 
      
      <Suspense fallback={<h3>Loading...</h3>}>
      <Users></Users> 
      </Suspense> 
      
    </>
  )
}













export default App 