import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              I'm <span className="purple">Jakub Korous</span>, a <span className="purple">full-stack developer</span> and <span className="purple">early-stage B2B SaaS builder</span> focused on automation, data, and scalable systems.
              <br /><br />
              I work <span className="purple">end-to-end</span> — from validating ideas and shaping products to building <span className="purple">backend architectures</span>, <span className="purple">frontend UX</span>, and <span className="purple">deployment pipelines</span>. I'm not interested in writing code for its own sake. I build systems that <span className="purple">remove friction</span>, <span className="purple">save time</span>, and <span className="purple">create leverage</span>.
              <br /><br />
              Currently based in <span className="purple">České Budějovice, Czechia</span>.
              Studying <span className="purple">Enterprise Informatics</span> while working on real-world products and internal tools.
              <br /><br />
              Outside of software, I train regularly, travel when possible, and stay intentionally curious — but <span className="purple">work comes first</span>.
            </p>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;
