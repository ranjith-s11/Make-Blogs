import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getCreators } from '../services/StudentService';
import "../App.css";

const Student = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
   let mounted = true;
   getCreators()
     .then(data => {
       if(mounted) {
         setStudents(data)
       }
     })
   return () => mounted = false;
 }, [])

  return(
   <div className="container-fluid side-container">
   <div className="row side-row" >
    <p id="before-table"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>
            <th>Creator ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {students.map((stu) =>
            <tr key={stu.id}>
                <td>{stu.creatorID}</td>
                <td>{stu.Fname}</td>
                <td>{stu.Sname}</td>
                <td>{stu.email}</td>
            </tr>)}
        </tbody>
    </Table>
    </div>
  </div>
  );
};

export default Student;