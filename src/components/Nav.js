import React from 'react'
import styles from './Nav.module.css'

export default function Nav(props) {

  const handleChange = () => {
    props.setToken("")
    props.setName("")
    window.localStorage.removeItem('signedToken')
    window.localStorage.removeItem('name')
  }
  return (
    <div className={styles.container}>
        Hello {props.name ? props.name : 'Guest'}
        {props.token ? <button onClick={() => handleChange()}>Sign Out</button> : ""}
    </div>
  )
}
