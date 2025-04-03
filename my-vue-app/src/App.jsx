import './App.css'
import ToDo from './ToDo'


function Student(){
  
  return (<>
    <div className='student'>
    <p>F-Name: </p>
    <p>Age: </p>
    </div>
  
  </>)
}

function Person(props){ 
  console.log(props)
   const personStyle = {
    color: 'red',
    textAlign: 'center',
    border: '1px solid salmon',
    borderRadius: '50px',
    padding: '10px 30px'
   }

  return (
    <div style={personStyle}>
      <p >I'm a person ~ {props.name}</p>
      <p style={personStyle}>Technology ~ {props.tech}</p>
    </div>
  )
}

function Job(){
  return(
    <p style={{
      color: 'white',
      textAlign: 'center',
      border: '1px solid salmon',
      borderRadius: '50px',
      padding: '10px 30px'
     }}>I'm Using Python</p>
  )
}

const MoreStyle = {
  color: 'gray',
  textAlign: 'center',
  border: '1px solid orange',
  borderRadius: '50px',
  padding: '10px 30px'
}


function Shop(props){

  return(<>
    <div style={MoreStyle}>
      <p>My Device is {props.name}</p>
      <p>My Device price {props.price}</p>
      <p>My Device LifeTime {props.life}</p>
    </div>
  </>)
}


function Salami({name, amount = '20'}){
  return(<>
    <div className='student'>
      <p>The Salami is : {name} </p>
      <p>The Salami is : {amount}</p>
    </div>
  </>)
}



export default function toDu(){


  return (<>
    
     <ToDo task='Sleep 8h :' isDone={true}></ToDo>
     <ToDo task='Code 6h Today:' isDone={false}></ToDo>
     <ToDo task='Create Videos:' isDone={false}></ToDo>


      {/* <h1>Hello There,</h1>
      <Student></Student>
      <Person name='Ashik' tech='C++'></Person>
      <Person name='Ashraf' tech="JavaScript"></Person>
      <Job></Job> 

      <Shop name='iPhone' price='$999' life='3 years'></Shop>
      <Shop name='Android' price='$149' life='6 years'></Shop>

      <Salami name='ROJA Eid' amount="300TK"></Salami>
      <Salami name='Kurbani Eid'></Salami> */}
    </>);
}

