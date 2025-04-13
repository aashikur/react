
import './App.css'
import Countries from './components/Countries/Countries'
import { Suspense } from 'react'



const countriesPromise = fetch('https://restcountries.com/v3.1/all').then(res=>res.json())

// console.log('Apps: ',countriesPromise);


function App() {

  return (
    <> 
    
    <Suspense fallback={<Load></Load>}>
     <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>

      
    </>
  )
}

function Load(){
  return <h1>Country is Loading...</h1>
}

export default App
