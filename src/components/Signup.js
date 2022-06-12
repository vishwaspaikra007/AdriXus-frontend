import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Signup.module.css'
import baseURL from './config'

export function validForm(text) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (text.match(mailformat)) return true
  return false
}

export default function Signup(props) {
  const [signupDetails, setSignupDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const emailRef = useRef()
  const [disabled, setDisabled] = useState(false)
  const handleChange = (e) => {
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validForm(signupDetails.email)) {
      alert('invalid email')
      emailRef.current.focus()
      return
    }
    setDisabled(true)
    fetch(baseURL + 'signup', {
      method: 'POST',

      body: JSON.stringify(signupDetails),

      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => {
      response.json().then((data) => {
        console.log(data)
        if (data.signedup) {
          props.setToken(data.signedJWT)
          props.setName(data.name)
          window.localStorage.setItem('signedToken', data.signedJWT)
          window.localStorage.setItem('name', data.name)
          setDisabled(false)
          alert(data.msg)
          // navigate('/')
        } else {
          setDisabled(false)
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
            required
            type="text"
            name="firstName"
            value={signupDetails.firstName}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          <span>Last Name</span>
          <input
            required
            type="text"
            name="lastName"
            value={signupDetails.lastName}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            ref={emailRef}
            required
            type="text"
            name="email"
            value={signupDetails.email}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            required
            type="password"
            name="password"
            value={signupDetails.password}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <input disabled={disabled} type="submit" value="Sign Up" />
        <Link to={props.base + '/login'}>Login</Link>
      </form>
    </div>
  )
}
