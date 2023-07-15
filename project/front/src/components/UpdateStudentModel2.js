import React,{Component} from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { updateStudent } from '../services/StudentService';



const UpdateStudentModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(props.student.studentID, e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Update Student");
        })
    };

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Student Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit} >
                            <Form.Group controlId="date">
                                    
                                    <Form.Control type="hidden" name="date" required defaultValue={props.student.date} placeholder="" />
                            </Form.Group>
                                <Form.Group controlId="Fname">
                                    
                                    <Form.Control type="hidden" name="Fname" required defaultValue={props.student.Fname} placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="Sname">
                                    
                                    <Form.Control type="hidden" name="Sname" required defaultValue={props.student.Sname} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="email">
                                    
                                    <Form.Control type="hidden" name="email" required defaultValue={props.student.email} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="Title">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" name="Title" required defaultValue={props.student.head} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="memory">
                                    <Form.Label>Memory</Form.Label>
                                    <Form.Control as="textarea" rows={5} name="memory" required defaultValue={props.student.memory} placeholder="" />
                            </Form.Group>
                            <Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};


export default UpdateStudentModal;

