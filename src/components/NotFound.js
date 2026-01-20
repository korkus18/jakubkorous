import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Particle from './Particle';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container fluid className="home-section" style={{ minHeight: '100vh' }}>
      <Particle />
      <Container className="home-content">
        <Row style={{ justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
          <Col md={8} style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '6rem', color: '#c770f0', marginBottom: '20px' }}>
              404
            </h1>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>
              Page Not Found
            </h2>
            <p style={{ color: '#ddd', fontSize: '1.2rem', marginBottom: '30px' }}>
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button
              variant="primary"
              size="lg"
              style={{
                backgroundColor: '#c770f0',
                borderColor: '#c770f0',
                padding: '12px 30px',
                fontSize: '1.1rem'
              }}
              onClick={() => navigate('/')}
            >
              Go Back Home
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default NotFound; 