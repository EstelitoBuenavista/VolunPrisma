import './css/index.css'
import './css/App.css'
import './css/ProfileCard.css'
import './css/Profile.css'
import './css/ButtonAdd.css'
import './css/EventCard.css'
import {jwtDecode} from 'jwt-decode'
import profile_pic from './img/profile-picture.png'
import ButtonAdd from './components/ButtonAdd'
import {Navigate, useLocation} from "react-router-dom"
import ProfileEventCard from './components/ProfileEventCard'
import ProfileCard from './components/ProfileCard'

import { useEffect, useState } from 'react'

function App() {

  const API_URL = "http://localhost:3000";
  const [activity, setActivity] = useState([]);
  const [profile, setProfile] = useState();

  useEffect(() => {
    let token = localStorage.getItem('token');
    const decoded = jwtDecode(token);

    renderProfile(decoded)
   }, [])

   const renderProfile = (decoded)=>{

    let user_id = decoded.user_id
    let role = decoded.role

    if (role == 'student'){
      let student_id = decoded.id 
      console.log(student_id)
      fetch(`${API_URL}/api/student/getEvents/${student_id}`)
      .then(response => response.json())
      .then(data => {
        setActivity(data)
        console.log(data)
      })
      .catch(error => {
        console.log("Error:", error);
      });
    }

      fetch(`${API_URL}/api/users/${user_id}`)
      .then(response => response.json())
      .then(data => {
        setProfile(data)
        console.log(data)
      })
      .catch(error => {
        console.log("Error:", error);
      });
   }

   const handleLogout = ()=>{
    localStorage.removeItem("token");
    return <Navigate to="/login" state={{ from: location}} replace />
   }

  return (
    <>

<div className="App__contents">
          <main className="Profile">
          {profile && profile.student ? (
            <ProfileCard 
              name={`${profile.user.first_name} ${profile.user.last_name}`} 
              IDnumber={profile.student.student_id} 
              points={profile.student.points} 
              course={profile.student.program} 
              year={profile.student.year}
              handleLogout = {handleLogout}
            />
            ) : (
            profile && (
              <ProfileCard 
                name={`${profile.user.first_name} ${profile.user.last_name}`} 
                IDnumber= "ADMIN"
                course = "CES Coordinator"
                points= "0"
                handleLogout = {handleLogout}
              />
              )
            )}
            <h1 className="Profile__heading">{profile && profile.student && activity.data && activity.data
                  .filter((item) => item.att_status === 'approved').length > 0 && "Events Joined"}</h1>
            <section className="Profile__events">
              {activity.data &&  (
                activity.data
                  .filter((item) => item.att_status === 'approved')
                  .map((item, i) => (
                    <ProfileEventCard 
                      key={i} 
                      title={item.event_title} 
                      date={item.event_date}
                      location={item.event_loc}
                      id={item.event_id}
                    />
                  ))
              ) }
            </section>

            <h1 className="Profile__heading">{profile && profile.student && activity.data && activity.data
                  .filter((item) => item.att_status === 'pending').length > 0 && "Upcoming & Pending Events"}</h1>
            <section className="Profile__events">
            {activity.data &&  (
                activity.data
                  .filter((item) => item.att_status === 'pending')
                  .map((item, i) => (
                    <ProfileEventCard 
                      key={i} 
                      title={item.event_title} 
                      date={item.event_date}
                      location={item.event_loc}
                      id={item.event_id}
                    />
                  ))
              ) }
            </section>
          </main>
        </div>

        </>
  )
}

export default App