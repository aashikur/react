
import './App.css'

function App() {

  return (
    <>
    <h1>Hello App</h1>
    <Person></Person>
    <Person></Person>
    <Person></Person>
    <Sport></Sport>

    </>
  )
}



function Person() {
  const age = 17;
  const petName = 'Kalu';
  return (
    <>
    <h1>I'm A person</h1>
    <p>I'm {age} year's old.</p>
    <p>My pet Name is {petName}.</p>
    <Sport></Sport>
    </>
  )
}

function Sport(){
  return(
    <>
    
    <h3>Hey Wanna Play Sports?</h3>
    
    
    </>
  )
}



export default App
