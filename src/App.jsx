import './App.css'
import Todo from './Todo';

function App() {

  return (
    <>

      <h1>my vite-app</h1>
      <Todo
        task="learn react"
      />
      <Todo
        task="learn MERN"
        isDone={false}
      />
      <Todo
        task="Try JSX"
        isDone={true}
      />
      <Todo 
        task="Try JSX"
        isDone={true}
      />
      {/* <Person></Person>
       <Person></Person>
       <Person></Person>
       <Person></Person>
       <Student></Student>
       <Student></Student>
       <Student></Student>
       <Developer></Developer> */}
    </>
  )
}

function Person() {
  const age = 25;
  const money = 500;
  const person = { name: 'sakib', age: '15' }
  return <h3>I am {person.name}, my age is {person.age}</h3>
}

function Student() {
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>name</p>
      <p>money</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple'
  }
  return (
    <div>
      <h5>Devo:</h5>
      <p>Devo:</p>
    </div>
  )
}

export default App
