import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I'm <span className="purple">Jakub Korous</span> – call me Kuba or Korkus.
              I'm a <span className="purple">passionate software developer</span> with a knack for solving problems through code.
              Originally from a small village, I now live in <span className="purple">České Budějovice, Czechia</span>.
              <br /><br />
              My journey in tech began in <span className="purple">high school</span>, which laid the foundation for my career.
              Today, I'm a <span className="purple">university student</span>, a <span className="purple">freelancer</span>, and I also work externally for other companies, continually sharpening my technical skills.
              <br /><br />
              Outside of coding, I have a deep passion for sports.
              I started with <span className="purple">martial arts</span> and later played <span className="purple">competitive floorball</span>—now, I've transitioned from being a player to a <span className="purple">coach</span>.
              I hit the gym to stay fit.
              <br /><br />
              I also love <span className="purple">exploring new countries</span> and have a keen interest in <span className="purple">cars</span> – experiences that fuel my curiosity and drive.
              Additionally, I engage with <span className="purple">social media and marketing</span> on the side.
            </p>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;
