import './css/index.css'
import './css/App.css'
import './css/Admin.css'
import './css/ButtonAdd.css'
import './css/ButtonDropdown.css'
import './css/Table.css'
import './css/PointsButton.css'
import './css/StudentsView.css'
import ButtonAdd from './components/ButtonAdd'
import StudTab from './components/StudTab'
import ActTab from './components/ActTab'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import StudAttRow from './components/StudAttRow'

function App(prop) {

  useEffect(() => {
    renderEvent()
    renderStudents()
   }, [])

  const API_URL = "http://localhost:3000";
  const {event_id} = useParams()
  const [students, setStudents] = useState([])
  const [event, setEvent] = useState({})
  const [sortType, setSortType] = useState("")

  const handleUpdateEventStatus = () =>{


    let token = localStorage.getItem('token');

    fetch(`${API_URL}/api/event/updateStatus/${event_id}`, {
    method: "PUT",
    headers: {
      'Authorization': `Bearer ${token}`
    },
  })
  .then((data) => {
    console.log(data);
    renderEvent()
    window.location.href = "../ActAdmin"
  })
  .catch((error) => {
    console.error("Error Changing Student Status:", error);
  });
  }
  

  const handleComplete = () => {

    if (event.data.status == 'upcoming'){
      return;
    }

    let token = localStorage.getItem('token');

    const newbody = {
      CES_points: event.data.CES_points
    }


    fetch(`${API_URL}/api/event/updateAllPoints/${event_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(newbody),
    })
      .then((response) => {response.json(),console.log(response)})
      .then((data) => {
        console.log("New activity updated:", data);
      })
      .catch((error) => {
        console.error("Error adding activity:", error);
        console.log(JSON.stringify(newbody))
      });

  handleUpdateEventStatus()
  }

  const handleAbsent = (id, student_id) =>{
  let token = localStorage.getItem('token');

  const putBody = {
    student_id: student_id,
    CES_points: event.data.CES_points
  }

   fetch(`${API_URL}/api/event_attendance/absent/${id}`, {
    method: "PUT",
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }, body: JSON.stringify(putBody),
  })
  .then((data) => {
    console.log(data);
    renderStudents()
  })
  .catch((error) => {
    console.error("Error Changing Student Status:", error);
  });
  }

  const handlePending = (id, student_id) =>{
    let token = localStorage.getItem('token');

    const putBody = {
      student_id: student_id,
      CES_points: event.data.CES_points
    }

   fetch(`${API_URL}/api/event_attendance/pending/${id}`, {
    method: "PUT",
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }, body: JSON.stringify(putBody),
  })
  .then((data) => {
    console.log(data);
    renderStudents()
  })
  .catch((error) => {
    console.error("Error Changing Student Status:", error);
  });
  }

  const handleApproved = (id, student_id) =>{
    let token = localStorage.getItem('token');

    const putBody = {
      student_id: student_id,
      CES_points: event.data.CES_points
    }

    console.log(putBody)

   fetch(`${API_URL}/api/event_attendance/approved/${id}`, {
    method: "PUT",
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(putBody),
  })
  .then((data) => {
    console.log(data);
    renderStudents()
  })
  .catch((error) => {
    console.error("Error Changing Student Status:", error);
  });
  }

  const renderStudents = ()=>{
    fetch(`${API_URL}/api/event/findStudentsByEvent/${event_id}`)
      .then(response => response.json())
      .then(data => {
        setStudents(data)
        console.log(data)
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }

  useEffect(() => {
    let sortedEvent;
  
    if (sortType === 'ID') {
      sortedEvent = [...students].sort((a, b) => b.student_id - a.student_id);
    } else if (sortType === 'LN') {
      sortedEvent = [...students].sort((a, b) => a.student_id - b.student_id);
    } else {
      renderStudents(); 
      return; 
    }
  
    setStudents(sortedEvent);
  }, [sortType]); 

  const renderEvent = ()=>{
    fetch(`${API_URL}/api/event/${event_id}`)
      .then(response => response.json())
      .then(data => {
        setEvent(data)
        console.log("event" + data)
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }


  return (
    <>
      <div className="App__contents">
          <main className="Admin">
            <div className="Admin__nav">
            <StudTab /><ActTab/>
            </div>
        
            <div className="Attendance">
                <div className="Attendance_Det">
                <div className="Att_Titles">
                    <h1 className="Att_EventTitle">{event.data && event.data.event_title}</h1>
                    <h1 className="Att_Points">{event.data && event.data.CES_points} CES Points</h1> 
                    <button onClick={()=>{handleComplete()}} className='actcompleted'>Activity Completed</button>
                </div>
                <div className="Activity_Info">
                    <h3 className="Details">Event Date: {event.data && event.data.event_date ? event.data.event_date.split("T")[0] : "No Date"}</h3>
                    <h3 className="Details">Event Location: {event.data && event.data.event_loc}</h3>
                 </div>
                 </div>
            

              <div className="StudentsView__menu">
                <ButtonAdd link = {`/AddAttendance/${event_id}`} text="Add Attendance"/>
                <select onChange={(e) => {setSortType(e.target.value)}}className='ButtonDropdown'>
                    <option value=" ">Sort By</option>
                    <option value="ID">ID || ASC</option>
                    <option value="LN">Last || DESC</option>
                    </select>
              </div>

              <table id="studentsTable" className="Table">
                <thead>
                  <tr>
                    <th className="Table__header">ID</th>
                    <th className="Table__header">Name</th>
                    <th className="Table__header">Program</th>
                    <th className="Table__header">Year</th>
                    <th className="Table__header">Status</th>
                    <th className="Table__header"></th>
                    <th className="Table__header"></th>
                    <th className="Table__header"></th>
                  </tr>
                </thead>
                <tbody id="studentsTableBody">
                {students && students.map((item, i) => (
                  <>
                  <StudAttRow 
                    IDnumber = {item.student.student_id} 
                    name={item.student ? `${item.student.user.first_name} ${item.student.user.last_name}` : "No Name"}
                    course = {item.student.program}
                    year = {item.student.year}
                    status = {item.att_status}
                    att_id = {item.att_id}
                    handleAbsent = {handleAbsent}
                    handlePending = {handlePending }
                    handleApproved = {handleApproved}
                  />
                  </>
                ))}
                </tbody>
              </table>
              </div>
          </main>
        
        </div>
    </>
  )
}

export default App