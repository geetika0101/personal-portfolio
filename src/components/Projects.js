import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import cauldron from "../assets/img/cauldron.png";
import deathlyhallows from "../assets/img/deathlyhallows.png";
import history from "../assets/img/history.png";
import crystalball from "../assets/img/crystalball.png";
import language from "../assets/img/language.png";
import capricorn from "../assets/img/capricorn.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsTab1 = [
    {
      title: "Aladdin Accounting Subledger",
      description: "Design & Development",
      imgUrl: cauldron,
    },
    {
      title: "Official Accounting Subledger Regression",
      description: "Design & Development",
      imgUrl: deathlyhallows,
    }
  ]
  const projectsTab2 =[
    {
      title: "Portfolio Website",
      description: "Design & Development",
      imgUrl: history,
    },
    {
      title: "Chrome Extension",
      description: "Design & Development",
      imgUrl: capricorn,
    }
  ]
  const projectsTab3 =[
    {
      title: "Project X(Return Forecaster)",
      description: "Design & Development",
      imgUrl: crystalball,
    },
    {
      title: "OCR",
      description: "Design & Development",
      imgUrl: language,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Geetika has taken part or ha built the following</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">BlackRock</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Side Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">College Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsTab1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectsTab2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projectsTab3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
