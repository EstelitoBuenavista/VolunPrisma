import '../css/Table.css'
import '../css/index.css'
import '../css/App.css'
import '../css/StudentsView.css'

function App(student){

    return (
        <> 
            <tr>
                <td className="Table__data">{student.IDnumber}</td>
                <td className="Table__data">{student.name}</td>
                <td className="Table__data">{student.course}</td>
                <td className="Table__data">{student.year}</td>
                <td className='Table__data'>
                    <span id="points" className="Points">{student.status}</span>
                </td>
                <td className='Table__data'>
                    <button className="Absent" onClick={()=>{student.handleAbsent(student.att_id, student.IDnumber)}}>Absent</button>
                    </td>
                    <td>
                    <button className="Pending" onClick={()=>{student.handlePending(student.att_id, student.IDnumber)}}>Pending</button>
                </td>
                <td>
                    <button className="Approved" onClick={()=>{student.handleApproved(student.att_id, student.IDnumber)}}>Approved</button>
                </td>
            </tr>
        </>

    )
}

export default App