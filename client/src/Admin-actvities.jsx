import './css/AddStudent.css'
import './css/ActivitiesView.css'
import './css/PointsButton.css'
import ButtonAdd from './components/ButtonAdd'
import StudTab from './components/StudTab'
import ActTab from './components/ActTab'
import ActRow from './components/ActRow'
import UpdateEventStatus from './middleware/UpdateEventStatus'
import { Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

function App() {

  const API_URL = "http://localhost:3000";
  const [activity, setActivity] = useState([]);
  const [sortType, setSortType] = useState("");

  const renderActivity = () => {
    fetch(`${API_URL}/api/event/`)
      .then(response => response.json())
      .then(data => {
        setActivity(data)
        console.log(data)
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }

  useEffect(() => {
    UpdateEventStatus()
    renderActivity()
   }, [])

   const handleDelete = (id) =>{
    let token = localStorage.getItem('token');

   fetch(`${API_URL}/api/event/${id}`, {
    method: "DELETE",
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then((data) => {
    console.log(data);
    renderActivity()
  })
  .catch((error) => {
    console.error("Error deleting activity:", error);
  });

  }

  const handleUpdate = (id)=>{
    window.location.href = `./UpdateActivity/${id}`;
  }

  useEffect(() => {
    let sortedActivity;
  
    if (sortType === 'Loc') {
      sortedActivity = [...activity].sort((a, b) => b.event_loc.localeCompare(a.event_loc));
    } else if (sortType === 'Status') {
      sortedActivity = [...activity].sort((a, b) => a.event_title.localeCompare(b.event_title));
    } else {
      renderActivity(); 
      return; 
    }
   setActivity(sortedActivity)
}, [sortType])

  return (
    <>
      <div className="App__contents">
          <main className="Admin">
            <div className="Admin__nav">
            <StudTab/><ActTab status = " active"/>
            </div>

            <div className="ActivitiesView">
              <h1 className="ActivitiesView__heading">Activities</h1>
              <div className="ActivitiesView__menu">
                <ButtonAdd link = "/AddActivity" text="Create New Activity"/>
                <select onChange={(e) => {setSortType(e.target.value)}}className='ButtonDropdown'>
                    <option value=" ">Sort By</option>
                    <option value="Loc">Location</option>
                    <option value="Status">Title</option>
                    </select>
              </div>

              <table className="Table" id="activitiesTable">
                <thead>
                  <tr>
                    <th className="Table__header">Title</th>
                    <th className="Table__header">Date</th>
                    <th className="Table__header">Location</th>
                    <th className="Table__header">Description</th>
                    <th className="Table__header">Status</th>
                    <th className="Table__header"></th>
                  </tr>
                </thead>
                <tbody id="activitiesTableBody">
                {activity && activity.map((item, i) => (
                  <>
                  <ActRow 
                    key = {i}
                    title = {item.event_title} 
                    date = {item.event_date}
                    location = {item.event_loc}
                    desc = {item.event_desc}
                    status = {item.status}
                    id = {item.event_id}
                    handleDelete = {handleDelete}
                    handleUpdate = {handleUpdate}
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