import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { addStudent } from '../services/StudentService';


const AddStudentModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Add Student");
        })
    }

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Fill In Student Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="date">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date" name="date" required placeholder="" />
                            </Form.Group>
                                <Form.Group controlId="Fname">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name="Fname" required placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="Sname">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name="Sname" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="email" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="Title">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" name="Title" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="memory">
                                    <Form.Label>Memory</Form.Label>
                                    <Form.Control as="textarea" rows={3} name="memory" required placeholder="" />
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

export default AddStudentModal;