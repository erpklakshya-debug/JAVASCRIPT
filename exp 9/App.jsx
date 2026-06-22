import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { useState, useEffect } from 'react'
import './App.css'
function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [users, setUsers] = useState([])
  const [success, setSuccess] = useState('')
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  }, [])
  const validate = () => {
    let err = {}
    if (!name.trim()) err.name = "Name is required"
    if (!email.trim()) err.email = "Email is required"
    if (!password.trim()) err.password = "Password is required"
    setErrors(err)
    return Object.keys(err).length === 0
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      const newUser = {
        name: name,
        email: email
      }
      setUsers([newUser, ...users])
      setSuccess("Registration Successful!")
      setName('')
      setEmail('')
      setPassword('')
      setErrors({})
    }
  }
  return (
    <div className="container">
      <div className="form-box">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
          <button type="submit">Register</button>
        </form>
        {success && <p className="success">{success}</p>}
        <div className="users">
          <h3>Registered Users</h3>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default App