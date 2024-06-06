import './css/Add.css'
import './css/index.css'
import './css/App.css'
import './css/ButtonAdd.css'
import './css/ERRORRR.css'
import { useState, useEffect } from 'react'


function App() {

  const regex = /^[0-9]*$/;

  const token = localStorage.getItem('token');
  const API_URL = "http://localhost:3000";
  const [Title,setTitle] = useState("")
  const [Date,setDate] = useState("")
  const [Location,setLocation] = useState("")
  const [Description,setDescription] = useState("")
  const [Points,setPoints] = useState("")
  const [isError, setIsError] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()

    const newActivity = {
      event_title: Title,
      event_date: Date,
      event_loc: Location,
      event_desc: Description,
      CES_points: Points,
      status: "upcoming"
    };


    fetch(`${API_URL}/api/event/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(newActivity),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New activity added:", data);
        window.location.href = "./ActAdmin";
      })
      .catch((error) => {
        console.error("Error adding activity:", error);
        console.log(JSON.stringify(newActivity))
      });
  }

  
  useEffect(() => {
    if (
      (Points && !regex.test(Points))
    ) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [Points]);

  return (
    <>
      <div className="App__contents">
          <div className="Add">
            <h1>Add Activity</h1>
            <div className="container">
              <form id="activityForm">
                <label >Title</label>
                <input type="text" value={Title} onChange={e => setTitle(e.target.value)}required />

                <label >Date</label>
                <input type="text" value={Date} onChange={e => setDate(e.target.value)} required />

                <label>Location</label>
                <input type="text" value={Location} onChange={e => setLocation(e.target.value)} required/>

                <label >Description</label>
                <input type="text" value={Description} onChange={e => setDescription(e.target.value)} required/>

                <label>CES Points</label>
                <input type="text" value={Points} onChange={e => setPoints(e.target.value)} required/>
                <center>
                <input
                  onClick={handleSubmit}
                  value="Add"
                  id= "submit"
                  className= {isError ? 'error-outline' : 'normal-outline'}
                  disabled = {isError}
                  readOnly
                />
                </center>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default App