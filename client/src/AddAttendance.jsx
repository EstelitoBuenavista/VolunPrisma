import './css/AddAtt.css'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'


function App() {

  const {id} = useParams()

  const token = localStorage.getItem('token');
  const API_URL = "http://localhost:3000";
  const [stud_id, setStud_id] = useState([])
  const handleRegister = (e) =>{
    e.preventDefault()

    const newAttendance = {
      student_id: stud_id,
      event_id: id,
      status: "pending"
    };

    fetch(`${API_URL}/api/event_attendance/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(newAttendance),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Account successfully Created", data);
        window.location.href = `../EventAttendance/${id}`;
      })
      .catch((error) => {
        console.error("Error creating Account", error);
        console.log(JSON.stringify(newStudent))
      });
  }


  return (
    <>
      <div className="App__contents">
          <div className="Add">
            <h1>Add Attendance</h1>
            <div className="container">
              <form id="newStudent">
              <label >Student ID Number</label>
              <input type="text" value={stud_id} onChange={e => setStud_id(e.target.value)} required />
                <input
                  className="addatt"
                  id="addatt"
                  type="submit"
                  value="Add"
                  onClick={handleRegister}
                />
              </form>
            </div>
          </div>
          </div>
    </>
  )
}

export default App