import React from 'react'
import { SubStudent } from './SubStudent'

export const StudentList = (props) => {
  console.log("emplist ",props)
 
  return (
    <div style={{textAlign:"center"}}>
        <h1>Student List</h1>
        {props.title}
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
            </tr>
          </thead>
          <tbody>
            {
              props.students.map((emp)=>{
                return <tr>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.age}</td>
                </tr>
              })
            }
          </tbody>
        </table>
         <SubStudent title = {props.title}></SubStudent>
     </div>
  )    
}
