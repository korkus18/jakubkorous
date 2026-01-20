import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

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
              I'm a <b className="purple">full-stack developer</b> and <b className="purple">early-stage B2B SaaS builder</b> focused on <b className="purple">automation, data, and scalable systems</b>.
              <br/><br/>
              I work <b className="purple">end-to-end</b> — from shaping product ideas and defining <b className="purple">system architecture</b> to building <b className="purple">frontend interfaces</b> and <b className="purple">reliable backend services</b>. I'm not interested in writing code for its own sake. I build systems that <b className="purple">remove friction</b>, <b className="purple">save time</b>, and <b className="purple">create leverage</b>.
              <br/><br/>
              My background spans modern frontend frameworks like <b className="purple">React</b> and <b className="purple">Vue</b>, as well as backend development with <b className="purple">Django</b>, <b className="purple">Symfony</b>, and <b className="purple">REST-based APIs</b>. I prioritize <b className="purple">maintainability</b>, clarity, and <b className="purple">real-world impact</b> over theoretical perfection.
            </p>
          </Col>


          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt=""/>
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
