import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState()
  const [age, setAge] = useState()

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
    .then((users) => {
      setUsers(users.data)
    }).catch(err => console.log(err))
  } , [])

  const Submit = () => {
    axios.post('http://localhost:3001/createUser', {name, age})
    .then((users) => {
      console.log(users)
    }).catch(err => console.log(err))
  }

  return (
    <div className='center'>
      <h2>First MERN(Mongo, Express, React, Node) App</h2>
      {
        users.map(user => {
          // eslint-disable-next-line react/jsx-key
          return <div>
            <h3>{user.name}</h3>
            <h3>{user.age}</h3>
          </div>
        })
      }
      <br></br>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <input type="text" onChange={(e) => setAge(e.target.value)}></input>
      <button onClick={Submit}>Create User</button>
    </div>
  )
}


export default App
