import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { getStudentsbyId , deleteStudent } from '../services/StudentService';
import {useParams} from 'react-router-dom';
import UpdateStudentModal from "./UpdateStudentModel2";
import {Button,ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';

const BlogDetail = () => {
        const [students, setStudents] = useState([]);
        const [editModalShow, setEditModalShow] = useState(false);
        const [editStudent, setEditStudent] = useState([]);
        const [isUpdated, setIsUpdated] = useState(false);

        const param = useParams();
      
        useEffect(() => {
         let mounted = true;
         getStudentsbyId(param.userId)
           .then(data => {
             if(mounted) {
               setStudents(data)
             }
           })
         return () => mounted = false;
       }, [isUpdated, students])

       const handleUpdate = (e, stu) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditStudent(stu);
    };

    const handleDelete = (e, studentID) => {
        if(window.confirm('Are you sure ?')){
            e.preventDefault();
            deleteStudent(studentID)
            .then((result)=>{
                alert(result);
                setIsUpdated(true);
            },
            (error)=>{
                alert("Failed to Delete Student");
            })
        }
    };

     let EditModelClose=()=>setEditModalShow(false);
  return (
    <Container>
      <Row>
      
        <Col md={8}>
          <h1 className='center'>{students.head}</h1>
          <p className="right">- published at {students.date}</p>
          <p>
            <Badge variant="secondary">{students.Fname}</Badge>{' '}
            <Badge variant="secondary">{students.email}</Badge>{' '}
            <Badge variant="secondary">{students.date}</Badge>{' '}
          </p>

          <Col className="center" md={8}>
        <Button className="mr-4 center" variant="danger"
                    onClick={event => handleDelete(event,students.studentID)}>
                        <RiDeleteBin5Line />
                  </Button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <Button className="mr-2"
                    onClick={event => handleUpdate(event,students)}>
                        <FaEdit />
                  </Button>
                  <UpdateStudentModal show={editModalShow} student={editStudent} setUpdated={setIsUpdated}
                              onHide={EditModelClose}></UpdateStudentModal>
        </Col>

          <p>
            {students.memory}
          </p>
        </Col>
       
        <Col md={4}>
          <h3>Recent Posts</h3>
          <ul>
            <li>Post 1</li>
            <li>Post 2</li>
            <li>Post 3</li>
            <li>Post 4</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetail;
