import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { getStudents } from '../services/StudentService';
import {NavLink} from 'react-router-dom';

const Blog = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        let mounted = true;
        getStudents()
        .then(data => {
            if(mounted) {
                setStudents(data)
            }
        })
        return () => mounted = false;
    }, [])
  

  return (
    <Container>
      <h1 className='marg'>Blog App</h1>
      <Row>
        {students.map((post) => (
          <Col key={post.id} sm={4} md={10} lg={10}>
            <Card>
              <Card.Body>
                <Card.Title>{post.head}</Card.Title>
                <Card.Text>{post.memory.slice(0,120)}....</Card.Text>
                <Card.Text>
                  <small className="text-muted">
                    By {post.Fname} | {post.date}
                  </small>
                </Card.Text>
                <NavLink exact to={"/blogs/" + post.studentID +"/"} >
                  <Button variant="primary">Read More</Button>
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
