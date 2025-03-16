import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import AutosEU from "../../Assets/Projects/AutosEu.png";
import CrorealBlog from "../../Assets/Projects/CrorealBlog.png";
import DanaSyn from "../../Assets/Projects/DanaSyn.png";
import Event4all from "../../Assets/Projects/Event4all.png";
import Florinreobig from "../../Assets/Projects/Florinroebig.png";
import Legalfinder from "../../Assets/Projects/Legalfinder.png";
import Rehabnet from "../../Assets/Projects/Rehabnet.png";
import Slaplugin from "../../Assets/Projects/Slaplugin.png";
import Takespruce from "../../Assets/Projects/Takespruce.png";
import Virtuell from "../../Assets/Projects/Virtuell.png";
import VVdiamods from "../../Assets/Projects/Vvdiamods.png";
import SmartTodo from "../../Assets/Projects/SmartTodo.png";

import argo22 from "../../Assets/Projects/argo22-logo.png";
import alpodgroup from "../../Assets/Projects/alpodgroup-logo.png";
import virtuellLogo from "../../Assets/Projects/virtuell-logo.png";
import jk from "../../Assets/Projects/jk-logo.png";

function Projects() {
  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            A showcase of projects I've developed on my own or collaborated on.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {/* 1. VVdiamods */}
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={VVdiamods}
                  isBlog={false}
                  title="VVdiamods"
                  description="An upscale e-commerce solution for luxury jewelry and diamonds—built on WordPress with a custom theme and WooCommerce to deliver a premium shopping experience."
                  demoLink="https://www.vvdiamonds.cz/"
                  companyLogo={argo22}
              />
            </Col>
            {/* 2. SmartTodo */}
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={SmartTodo}
                  isBlog={false}
                  title="SmartTodo"
                  description="A modern, Django-powered to-do application designed to streamline your tasks with an intuitive interface and robust functionality."
                  demoLink=""
                  companyLogo={jk}
              />
            </Col>
            {/* 3. Autos EU */}
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={AutosEU}
                  isBlog={false}
                  title="Autos EU"
                  description="Europe’s premier online marketplace for electric and hybrid vehicles, connecting buyers and sellers seamlessly on a WordPress platform."
                  demoLink="https://autoseu.com/"
                  companyLogo={argo22}
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={Slaplugin}
                  isBlog={false}
                  title="Slaplugin"
                  description="A cutting-edge WordPress plugin that automatically updates, monitors site health, and delivers real-time reports to Git and Slack—keeping your website in top shape effortlessly."
                  demoLink=""
                  companyLogo={jk}
              />
            </Col>
            {/* 4. Dana Syn */}
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={DanaSyn}
                  isBlog={false}
                  title="Dana Syn"
                  description="A sleek Grav CMS platform tailored for car dealers, providing a dynamic space for vehicle listings and enhanced user engagement."
                  demoLink="https://www.danasyn.cz/"
                  companyLogo={argo22}
              />
            </Col>
            {/* 5. Slaplugin */}


            {/* 6. Croreal Blog */}
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={CrorealBlog}
                  isBlog={false}
                  title="Croreal Blog"
                  description="A custom PHP real estate portal and blog that not only showcases international properties but also boosts SEO and web recommendations to maximize online visibility."
                  demoLink="https://www.croreal.com/blog/cs/"
                  companyLogo={alpodgroup}
              />
            </Col>
            {/* 7. Takespruce */}
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={Takespruce}
                  isBlog={false}
                  title="Takespruce"
                  description="A premium WooCommerce-powered e-shop for CBD products—delivering quality and compliance in every transaction on a WordPress foundation."
                  demoLink="https://takespruce.com/"
                  companyLogo={argo22}
              />
            </Col>
            {/* 8. Florinroebig */}
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={Florinreobig}
                  isBlog={false}
                  title="Florinroebig"
                  description="The official website for a top law firm specializing in personal injury and property damage, featuring a custom WordPress design that exudes trust and professionalism."
                  demoLink="https://florinroebig.com/"
                  companyLogo={argo22}
              />
            </Col>
            {/* 9. Virtuell */}
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={Virtuell}
                  isBlog={false}
                  title="Virtuell"
                  description="A bespoke web solution for real estate professionals offering virtual tours, visualization, and home staging services to elevate property marketing."
                  demoLink="https://www.virtuell.cz/"
                  companyLogo={virtuellLogo}
              />
            </Col>
            {/* 10. Legalfinder */}
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={Legalfinder}
                  isBlog={false}
                  title="Legalfinder"
                  description="An intuitive online platform that connects clients with expert legal professionals, built on a custom WordPress theme for seamless navigation and trust."
                  demoLink="https://www.legalfinders.com/"
                  companyLogo={argo22}
              />
            </Col>
            {/* 11. Rehabnet */}
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={Rehabnet}
                  isBlog={false}
                  title="Rehabnet"
                  description="A comprehensive platform dedicated to rehabilitation—offering a directory of centers, educational resources, and community support, all powered by WordPress."
                  demoLink="https://rehabnet.com/"
                  companyLogo={argo22}
              />
            </Col>
            {/* 12. Event4all */}
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={Event4all}
                  isBlog={false}
                  title="Event4all"
                  description="A custom-developed website showcasing a full spectrum of event services—from lighting and sound to equipment rental—designed to make every event unforgettable."
                  demoLink="https://www.event4all.cz/"
                  companyLogo={jk}
              />
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Projects;
