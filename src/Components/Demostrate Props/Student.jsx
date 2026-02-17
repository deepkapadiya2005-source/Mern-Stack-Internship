import React from 'react'
import { StudentList } from './StudentList';


export const Student = () => {
  var title = "STUDENT APP";

  var school = {
    name: "P.P SAVANI",
    year: 2026,
  };

  var students = [
    { id: 101, name: "parth", age: 23 },
    { id: 102, name: "jay", age: 24 },
    { id: 103, name: "raj", age: 25 },
    { id: 104, name: "ajay", age: 23 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employees</h1>
      {/* //title = {title}   key = {value}  */}
      <StudentList title={title} school={school} students = {students}></StudentList>
      
    </div>
  )
}
