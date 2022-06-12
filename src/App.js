import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { useEffect, useState } from 'react';

function App() {
  const [token, setToken] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {
      setToken(window.localStorage.getItem('signedToken'))
      setName(window.localStorage.getItem('name'))
  }, [])
  
  return (
    <div className="App">
      <Router>
        <Nav token={token} name={name} setToken={(val) => setToken(val)} setName={(val) => setName(val)}/>
        <Routes>
          <Route path="/" element={
            token ? <Dashboard token={token} setToken={(val) => setToken(val)} setName={(val) => setName(val)}/> 
            : <Navigate replace to="/login" />} />
          <Route path="/login" element={
            token ? <Dashboard token={token} setToken={(val) => setToken(val)} setName={(val) => setName(val)}/> 
            : <Login  setName={(val) => setName(val)} setToken={(token) => setToken(token)}/>} />
          <Route path="/signup" element={
            token ? <Dashboard token={token} setToken={(val) => setToken(val)} setName={(val) => setName(val)}/> 
            : <Signup  setName={(val) => setName(val)} setToken={(token) => setToken(token)}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
