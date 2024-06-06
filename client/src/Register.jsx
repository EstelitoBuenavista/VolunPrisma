import './css/Register.css' 
import './css/Error.css' 
import logo from './img/logo.png'
import Login from './Login'
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'


function App() {

  const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const regex = /^[a-zA-Z\s]*$/;

  const API_URL = "http://localhost:3000";
  const [FN,setFN] = useState("")
  const [LN,setLN] = useState("")
  const [Year,setYear] = useState("1")
  const [Program,setProgram] = useState("BSCS")
  const [Email,setEmail] = useState("")
  const [Password,setPassword] = useState("")
  const [isError, setIsError] = useState(false)

  const handleRegister = (e) =>{
    e.preventDefault()

    const newStudent = {
      last_name: LN,
      first_name: FN,
      email: Email,
      password: Password,
      role: "student",
      program: Program,
      year: Year
    };

    fetch(`${API_URL}/api/student/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Account successfully Created", data);
        window.location.href = "./Login";
      })
      .catch((error) => {
        console.error("Error creating Account", error);
        console.log(JSON.stringify(newStudent))
      });
  }

  useEffect(() => {
    if (
      (FN && !regex.test(FN)) ||
      (LN && !regex.test(LN)) ||
      (Email && !regexEmail.test(Email))
    ) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [FN, LN, Email]);

  return (
    <>
      <div className="Reg_container">
      <img
        className="logo"
        alt="University of San Carlos Logo"
        src={logo}
      />
      <h2>Create a Voluntally Account</h2>
      <form id="register-form">
        <label >First Name</label>
        <input type="text" id = "firstname" value={FN} onChange={e => setFN(e.target.value)} className={FN ? 'inputWithContent' : ''} required />

        <label>Last Name</label>
        <input type="text"  id="lastname" value={LN} onChange={e => setLN(e.target.value)} className={LN ? 'inputWithContent' : ''} required />

        <label >E-mail</label>
        <input type="text" id="email" value={Email} onChange={e => setEmail(e.target.value)} className={Email ? 'inputWithContent' : ''} required />

        <div className="reg-dropdowns">
          <label className = "course">Course</label>
          <select id="FormCourse_Reg" className="ButtonDropdown" onChange={(e) => setProgram(e.target.value)}>
            <option value="BSCS">BSCS</option>
            <option value="BSIT">BSIT</option>
            <option value="BSIS">BSIS</option>
          </select>

          <label className = "year">Year</label>
          <select id="FormYear_Year" className="ButtonDropdown" onChange={(e) => setYear(e.target.value)}>
            <option  value="1">1</option>
            <option  value="2">2</option>
            <option  value="3">3</option>
            <option  value="4">4</option>
          </select>
        </div>

        <label >Password</label>
        <input type="password"   id="password" value={Password} onChange={e => setPassword(e.target.value)} required />

        <input
          id="submit"
          type="submit"
          value="submit"
          onClick={handleRegister}
          className= {isError ? 'error-outline' : 'normal-outline'}
          disabled = {isError}
        />
      </form>

      <div className='links'>
          <Link to = "/Login">Already have an account?</Link>
        </div>
      {/* <div id="error-message" style="color: red; display: none;"></div> */}
      
    </div>
    </>
  )
}

export default App