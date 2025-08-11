import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import professionalPortfolio from "../../Assets/Projects/Professional-portfolio.png";
import habitTracker from "../../Assets/Projects/Habit-Tracker.png";
import toDoWebApp from "../../Assets/Projects/To-Do-Web-App.png";
import foodie from "../../Assets/Projects/Foodie.png";
import financeTrackingApp from "../../Assets/Projects/Finance-Tracking-App.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="portfolio"
              description="Designed and developed a personal portfolio website to showcase skills, certifications, and projects.   ."
              ghLink="https://github.com/Mounesh1414/portfolio"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toDoWebApp}
              isBlog={false}
                title="To-Do Web App"
                description="A To-Do Web App build with React.js and Tailwind Css which allows users to manage their tasks and stay organized."
              ghLink="https://github.com/Mounesh1414/Todo-Task-Web-App"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodie}
              isBlog={false}
              title="Foodie"
              description="A Foodie Web App build with React.js and Tailwind Css which allows users to search for restaurants, view menus, and make reservations."
              ghLink="https://github.com/Mounesh1414/Foodie"
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={financeTrackingApp}
              isBlog={false}
              title=" Finance Tracking App"
              description="Collaborated in building a mobile application for personal finance management"
              ghLink="https://github.com/Mounesh1414/Finance_Apk "
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={habitTracker}
              isBlog={false}
              title=" Habit Tracker"
              description="A Habit Tracker App build with React.js and Tailwind Css which allows users to track their habits and stay organized."
              ghLink="https://github.com/Mounesh1414/Habit-Tracker"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={professionalPortfolio}
              isBlog={false}
              title="Professional Portfolio"
              description="A Professional Portfolio build with React.js and Tailwind Css which allows users to showcase their skills and projects."
              ghLink="https://github.com/Mounesh1414/Professional-Portfolio"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
