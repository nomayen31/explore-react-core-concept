import './App.css'

function App() {

  return (
    <>
      
       <h1>Vite appp</h1>
       <Person></Person>
       <Person></Person>
       <Person></Person>
       <Person></Person>
       <Student></Student>
       <Student></Student>
       <Student></Student>
    </>
  )
}

function Person (){
  const age = 25;
  const money = 500;
  const person = {name:'sakib', age:'15'}
  return <h3>I am {person.name}, my age is {person.age}</h3>
}

function Student(){
    return (
     <div>
      <h1>This is a student</h1>
      <h1>name</h1>
      <p>money</p>
    </div>
    )
}

export default App
