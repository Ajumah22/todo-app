import { useState } from 'react'

function App (props) {
  const [count, setCount] = useState(0)
  const [workPlace, setWorkPlace] = useState('Univelcity')

  return (
    <div className="App">
      <h1>This is my {props.name}'s App</h1>
      <p>He is {props.age} years old, he is {props.weight} and {props.complexion} in complexion</p>
      <p>He works at {workPlace}</p>
      <button onClick={() => setWorkPlace('Meta')}>Click to change workplace</button>
      <h2>{ count }</h2>
      <button onClick={() => setCount(count -1)}>Decrease</button>
      <button onClick={() => setCount(count +1)}>Increase</button>
    </div>
  )
}

export default App