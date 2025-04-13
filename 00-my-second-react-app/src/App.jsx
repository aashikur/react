/**
 * Notes:
 * 1. Importing CSS file for external styling.
 * 2. Defining a functional component `MyFuntion`.
 * 3. Using a JavaScript object `myStyle` for inline styling.
 * 4. Applying CSS classes using `className` attribute.
 * 5. Using inline styles directly within JSX elements.
 * 6. Creating and using a child component `Developer` with props.
 */

import './App.css'

function MyFuntion(){
  // Inline style object
  const myStyle = {
    color: 'red',
    background: 'black',
    padding: '2rem',
    borderRadius:  '50px',
    margin:'1rem'
  }

  return(
    <>
      {/* Applying CSS class */}
      <div className='custom'>
        <h1>Hey My Custom React.</h1>
      </div>
      
      {/* Reusing the same CSS class */}
      <div className='custom'>
        <h1>Hey My Custom React.</h1>
      </div>
      
      {/* Applying inline style using a JavaScript object */}
      <div style={myStyle}>
        Custom CSS IN LINE
      </div>

      {/* Applying inline style directly within JSX */}
      <div style={{
        border:'1px solid gray',
        padding: '2rem',
        borderRadius:'50px',
        margin:'1rem'
      }}>
        Direct Inline Style
      </div>

      {/* Using child component with props */}
      <Developer name='Ashik' tech='Python'></Developer>
      <Developer name='Joynal' tech='C++'></Developer>
    </>
  )
}

function Developer(props){
  return (
    <>
      {/* Using props to display dynamic content */}
      <div className='custom'>
        <h2>Hello World I'm {props.name}</h2>
        <p>He uses language: {props.tech}</p>
      </div>
    </>
  )
}

export default MyFuntion