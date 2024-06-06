
import { useState } from 'react'
import './css/Login.css'    
import logo from './img/logo.png'
import {Link} from 'react-router-dom';


function App() {

  const API_URL = "http://localhost:3000";
  const [Error,setError] = useState(" ")
  const [Email,setEmail] = useState("")
  const [Password,setPassword] = useState("")

  const handleLogin = (e) =>{
    e.preventDefault()

    const User = {
      email: Email,
      password: Password,
    };

    fetch(`${API_URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(User),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('token',data.accessToken);
        if (data.user.role == "student" || data.user.role == "admin"){
          window.location.href = "/";
          console.log(data)
        }
      })
      .catch((error) => {
        setError(error)
        console.log(JSON.stringify(User))
      });
  }

  return (
    <>
      <div className="LogIn_Container">
      <img
        className="logo"
        alt="University of San Carlos Logo"
        src={logo}
      />
      <h2>Log in</h2>
      <form>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
        <input type='submit' value="Login" onClick={handleLogin}/>
      </form>

      <div className='links'>
        <Link to = "/">Forgot Password</Link>
      </div>
      <div className='links'>
        <Link to = "/Register">Create account here</Link>
      </div>

        
    </div>
    </>
  )
}

export default App
