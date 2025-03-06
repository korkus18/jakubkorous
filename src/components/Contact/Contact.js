import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

function ContactPage() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="contact-page-section">
            <Container fluid className="contact-container">
                <Row className="justify-content-center">
                    {/* Formulář */}
                    <Col xs={12} md={6} className="form-column fancy-card">
                        <h2 className="contact-title">Get in Touch</h2>
                        <Form>
                            <Form.Group controlId="formName" className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Your Email" />
                            </Form.Group>
                            <Form.Group controlId="formPhone" className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Your Phone Number" />
                            </Form.Group>
                            <Form.Group controlId="formSubject" className="mb-3">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" placeholder="Subject" />
                            </Form.Group>
                            <Form.Group controlId="formMessage" className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Your message..." />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="send-btn">
                                Send Message
                            </Button>
                        </Form>
                    </Col>

                    {/* Kontaktní info */}
                    <Col xs={12} md={4} className="info-column fancy-card">
                        <div className="contact-info-box">
                            <h3>Contact Me</h3>
                            <ul className="info-list">
                                <li>
                                    <FaPhoneAlt className="info-icon" />
                                    <span>+123 456 789</span>
                                </li>
                                <li>
                                    <FaEnvelope className="info-icon" />
                                    <span>info@myemail.com</span>
                                </li>
                            </ul>
                            <div className="social-icons">
                                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <FaFacebookF />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                    <FaTwitter />
                                </a>
                                <a href="https://github.com" target="_blank" rel="noreferrer">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactPage;
