import React, { useState, createContext, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Signup.module.css'
import baseURL from './config'

export default function Signup(props) {
  const [signupDetails, setSignupDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(baseURL+'signup', {
      method: 'POST',

      body: JSON.stringify(signupDetails),

      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(response => {
      response.json().then(data => {
        console.log(data)
        if(data.signedup) {
          props.setToken(data.signedJWT)
          props.setName(data.name)
          window.localStorage.setItem('signedToken', data.signedJWT)
          window.localStorage.setItem('name', data.name)
          alert(data.msg)
          // navigate('/')
        } else {
          alert(data.msg)
        }
      })
    })
  }

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <span>First Name</span>
          <input
            type="text"
            name="firstName"
            value={signupDetails.firstName}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          <span>Last Name</span>
          <input
            type="text"
            name="lastName"
            value={signupDetails.lastName}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="text"
            name="email"
            value={signupDetails.email}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={signupDetails.password}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <input type="submit" value="Sign Up" />
      <Link to='/login'>Login</Link>
      </form>
    </div>
  )
}
