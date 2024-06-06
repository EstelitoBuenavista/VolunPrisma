import './css/AddStudent.css'
import './css/Error.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


function App() {

  const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const regex = /^[a-zA-Z\s]*$/;

  const token = localStorage.getItem('token');
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
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(newStudent),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Account successfully Created", data);
        window.location.href = "./StudAdmin";
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
      <div className="App__contents1">
          <div className="Add">
            <h1>Add Student</h1>
              <form id="newStudent">
              <label >First Name</label>
              <input type="text" value={FN} onChange={e => setFN(e.target.value)} className={FN ? 'inputWithContent' : ''}  required />

              <label>Last Name</label>
              <input type="text" value={LN} onChange={e => setLN(e.target.value)} className={LN ? 'inputWithContent' : ''} required />

              <label >E-mail</label>
              <input type="email" value={Email} onChange={e => setEmail(e.target.value)} className={Email ? 'inputWithContent' : ''} required />

              <label >Password</label>
              <input type="password" value={Password} onChange={e => setPassword(e.target.value)} className={Password ? 'inputWithContent' : ''}  required />
                <div className=''>
                <div className="flex">
                  <div className="dropdowns">
                    Course
                    <select id="FormCourse_Reg" className="ButtonDropdown" onChange={(e) => setProgram(e.target.value)}>
                      <option value="BSCS">BSCS</option>
                      <option value="BSIT">BSIT</option>
                      <option value="BSIS">BSIS</option>
                    </select>
                  </div>
                  <div className="dropdowns">
                    Year
                    <select id="FormYear_Year" className="ButtonDropdown" onChange={(e) => setYear(e.target.value)}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>
                <input
                  className= {isError ? 'error-outline' : 'normal-outline'}
                  disabled = {isError}
                  type="submit"
                  value="Add"
                  onClick={handleRegister}
                />
                </div>
              </form>
          </div>

          </div>
    </>
  )
}

export default App