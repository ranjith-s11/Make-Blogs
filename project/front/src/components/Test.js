import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Test = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit....',
      author: 'John Doe',
      date: 'July 1, 2023',
    },
    {
      id: 2,
      title: 'Mastering CSS Grid Layout',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit....',
      author: 'Jane Smith',
      date: 'July 5, 2023',
    },
  ];

  return (
    <Container>
      <h1>Blog App</h1>
      <Row>
        {blogPosts.map((post) => (
          <Col key={post.id} sm={6} md={4} lg={3}>
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
                <Card.Text>
                  <small className="text-muted">
                    By {post.author} | {post.date}
                  </small>
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Test;
