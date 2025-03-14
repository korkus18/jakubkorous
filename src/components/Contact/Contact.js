import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import emailjs from "emailjs-com";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaFacebook,
    FaInstagram, FaMapMarkerAlt, FaAddressCard,
} from "react-icons/fa";

function ContactPage() {
    // Lokální stav pro zobrazení hlášky
    const [feedbackMsg, setFeedbackMsg] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_3azg8ex",      // Tvůj Service ID
                "template_nsk9ovf",        // Tvůj Template ID
                e.target,              // Formulář
                "4OrFtzvqEH0Hz5_8Q"    // Tvůj Public (User) Key
            )
            .then(
                (result) => {
                    console.log("Email odeslán:", result.text);
                    // Nastavíme úspěšnou hlášku
                    setFeedbackMsg("Zpráva byla úspěšně odeslána!");
                    // Reset formuláře
                    e.target.reset();
                },
                (error) => {
                    console.log("Chyba při odesílání:", error.text);
                    // Nastavíme chybovou hlášku
                    setFeedbackMsg("Došlo k chybě, zkuste to prosím znovu.");
                }
            );
    };

    return (
        <Container fluid className="contact-page">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Get in <strong className="purple">Touch</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Whether it's a project, collaboration or just a friendly chat – feel free to reach out!
                </p>

                <Row style={{ justifyContent: "center", paddingBottom: "25px", paddingTop: "25px" }}>
                    <Col md={5} style={{ alignSelf: "flex-start" }}>
                        <div className="contact-info fancy-card">
                            <h2 className="contact-title">Contact Info</h2>
                            <p>
                                <FaPhoneAlt className="contact-icon" /> +420 606 292 307
                            </p>
                            <p>
                                <FaEnvelope className="contact-icon" /> contact@jakubkorous.cz
                            </p>
                            <p>
                                <FaMapMarkerAlt className="contact-icon" /> Radhostice 15, Čkyně 38481
                            </p>
                            <p>
                                <FaAddressCard className="contact-icon" /> ICO: 21003637
                            </p>
                            <div className="social-icons">
                                <a
                                    href="https://facebook.com/yourprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebook />
                                </a>
                                <a
                                    href="https://instagram.com/yourprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="https://linkedin.com/in/yourprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="https://github.com/yourprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="contact-form fancy-card">
                            <h2 className="contact-title">Send a Message</h2>

                            {/* Zde zobrazíme případnou hlášku (pokud není prázdná) */}
                            {feedbackMsg && (
                                <div style={{ marginBottom: "15px" }}>
                                    <p
                                        style={{
                                            color: feedbackMsg.includes("chybě") ? "red" : "lightgreen",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {feedbackMsg}
                                    </p>
                                </div>
                            )}

                            <Form onSubmit={sendEmail}>
                                <Form.Group className="form-group" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your name" name="name" />
                                </Form.Group>
                                <Form.Group className="form-group" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Your email" name="email" />
                                </Form.Group>
                                <Form.Group className="form-group" controlId="phone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="tel" placeholder="Your phone number" name="phone" />
                                </Form.Group>
                                <Form.Group className="form-group" controlId="subject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="Subject" name="subject" />
                                </Form.Group>
                                <Form.Group className="form-group" controlId="message">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Your message" name="message" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="send-btn">
                                    Send Message
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ContactPage;
