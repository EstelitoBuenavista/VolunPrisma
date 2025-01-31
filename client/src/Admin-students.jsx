import './css/index.css'
import './css/App.css'
import './css/Admin.css'
import './css/ButtonAdd.css'
import './css/ButtonDropdown.css'
import './css/Table.css'
import './css/PointsButton.css'
import './css/StudentsView.css'
import StudRow from './components/StudRow'
import ButtonAdd from './components/ButtonAdd'
import ButtonDropdown from './components/ButtonDropdown'
import StudTab from './components/StudTab'
import ActTab from './components/ActTab'
import { useEffect, useState } from 'react'


function App() {

  const token = localStorage.getItem('token');
  const API_URL = "http://localhost:3000";
  const [students, setStudents] = useState([]);
  const [sortType,setSortType] = useState("");
  const [filterType, setFilterType] = useState("");

  const renderStudents = ()=>{
    fetch(`${API_URL}/api/student/`)
      .then(response => response.json())
      .then(data => {
        setStudents(data)
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }

  useEffect(() => {
    renderStudents()
   }, [])

   const handleDelete = (id) =>{
    fetch(`${API_URL}/api/student/${id}`, {
     method: "DELETE",
     headers: {
      'Authorization': `Bearer ${token}`
    }
   })
   .then(() => {
     console.log("Student deleted");
     renderStudents()
   })
   .catch((error) => {
     console.error("Error deleting Student:", error);
   });
 
   }

   const handleAddPoints= (id) =>{
    fetch(`${API_URL}/api/student/addPoint/${id}`, {
     method: "PUT",
     headers: {
      'Authorization': `Bearer ${token}`
    }
   })
   .then(() => {
     console.log("Updated");
     renderStudents()
   })
   .catch((error) => {
     console.error("Error Updating:", error);
   })
   }

   const handleMinusPoints= (id) =>{
    fetch(`${API_URL}/api/student/minusPoint/${id}`, {
     method: "PUT",
     headers: {
      'Authorization': `Bearer ${token}`
    }
   })
   .then(() => {
     console.log("Updated");
     renderStudents()
   })
   .catch((error) => {
     console.error("Error Updating:", error);
   })
   }

   const handleSortID = ()=>{
      console.log("this shit doesnt works")
      fetch(`${API_URL}/api/student/sortByID`)
        .then(response => response.json())
        .then(data => {
          setStudents(data)
        })
        .catch(error => {
          console.log("Error:", error);
        });
      //console.log(data);
      console.log("this shit workssssss")
  }

  // useEffect(()=>{
  //   let sorted;
  //   if (sortType === 'ID'){
  //     sorted = students.sort((a, b) => b.student_id - a.student_id)
  //     console.log(sorted)
  //     setStudents(sorted)
  //     console.log(students)
  //   } else if (sortType === 'LN'){
  //     sorted = students.sort((a, b) => b.user.last_name.localCompare(a.user.last_name))
  //     setStudents(sorted)
  //   } else if (sortType === " "){
  //     renderStudents()
  //   }
  // },[sortType])

  useEffect(() => {
    let sortedStudents;
  
    if (sortType === 'ID') {
      sortedStudents = [...students].sort((a, b) => b.student_id - a.student_id);
    } else if (sortType === 'LN') {
      sortedStudents = [...students].sort((a, b) => a.user.last_name.localeCompare(b.user.last_name));
    } else {
      renderStudents(); 
      return; 
    }
  
    setStudents(sortedStudents);
  }, [sortType]); 

  useEffect(() => {
    fetch(`${API_URL}/api/student/`)
      .then(response => response.json())
      .then(data => {
        let filteredStudents;
  
        if (filterType === 'BSCS') {
          filteredStudents = data.filter(student => student.program === 'BSCS');
        } else if (filterType === 'BSIT') {
          filteredStudents = data.filter(student => student.program === 'BSIT');
        } else {
          filteredStudents = data;
        }
  
        setStudents(filteredStudents);
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }, [filterType]); // Trigger useEffect when filterType changes
  
  


  return (
    <>
      <div className="App__contents">
          <main className="Admin">
            <div className="Admin__nav">
            <StudTab status = " active"/><ActTab/>
            </div>
            
            <div className="StudentsView">
              <h1 className="StudentsView__heading">Students</h1>
              <div className="StudentsView__menu">
                <ButtonAdd link = "/AddStudent" text="Add Student"/>
                <select onChange={(e)=>{setSortType(e.target.value)}} className='ButtonDropdown'>
                    <option value=" ">Sort By</option>
                    <option value="ID">ID</option>
                    <option value="LN">Last name</option>
                    <option value="Program">Program</option>
                    <option value="Year">Year</option>
                    </select>
              </div>

              <table id="studentsTable" className="Table">
                <thead>
                  <tr>
                    <th className="Table__header">ID</th>
                    <th className="Table__header">Name</th>
                    <th className="Table__header">Program</th>
                    <th className="Table__header">Year</th>
                    <th className="Table__header">Points</th>
                    <th className="Table__header">Actions</th>
                  </tr>
                </thead>
                <tbody id="studentsTableBody">
                {students && students.map((item, i) => (
                  <>
                  <StudRow 
                    IDnumber = {item.student_id} 
                    name={item.user ? `${item.user.first_name} ${item.user.last_name}` : "No Name"}
                    course = {item.program}
                    year = {item.year}
                    points = {item.points}
                    handleMinusPoints = {handleMinusPoints}
                    handleDelete = {handleDelete}
                    handleAddPoints = {handleAddPoints}
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