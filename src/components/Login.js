import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Signup.module.css'
import baseURL from './config'

export default function Login(props) {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
      console.log(e, loginDetails)
    setLoginDetails({...loginDetails, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(baseURL + 'login', {
      method: 'POST',

      body: JSON.stringify(loginDetails),

      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(response => {
      response.json().then(data => {
        console.log(data)
        if(data.logedin) {
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
          <span>Email</span>
          <input required type='text' name='email' value={loginDetails.email} onChange={(e) => handleChange(e)}/>
        </label>
        <label>
          <span>Password</span>
          <input required type='password' name='password' value={loginDetails.password} onChange={(e) => handleChange(e)}/>
        </label>
        <input type='submit' value='Login' />
      <Link to={props.base + '/signup'}>Signup</Link>
      </form>
    </div>
  )
}
