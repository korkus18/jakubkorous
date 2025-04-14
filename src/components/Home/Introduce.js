import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn} from "react-icons/fa";

function Introduce() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{fontSize: "2.6em"}}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple">full-stack developer</b> and university student with proven experience in
              designing <b className="purple">scalable e-commerce platforms</b> and <b className="purple">advanced web
              applications</b>. My passion for technology drives me to refine my skills and implement innovative,
              real-world solutions.
              <br/><br/>
              I have deep expertise in modern web technologies like HTML5, CSS3, and JavaScript, using frameworks such
              as React.js and Vue.js. On the backend, I build robust APIs with Node.js and have advanced skills in PHP
              (Symfony), WordPress customizations, and Python/Django.
              <br/><br/>
              I'm dedicated to writing <b className="purple">clean, efficient code</b> and crafting <b
                className="purple">intuitive UX/UI designs</b> that push the boundaries of web development. I
              continuously embrace new technologies to deliver high-performance, future-ready solutions.
            </p>
          </Col>


          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar"/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                    href="https://www.facebook.com/profile.php?id=100010851090658"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <FaFacebook/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.instagram.com/kubakorous/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <FaInstagram/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.linkedin.com/in/jakub-korous-9a98aa1b9/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <FaLinkedin/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://github.com/korkus18/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <FaGithub/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Introduce;
