import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo-icon.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from '../assets/img/resume.png';
import ResumeDoc from '../assets/files/exampleDoc.pdf'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={2} md={55}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={5} className="text-center text-sm-end">
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
          <Col size={12} sm={5} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/geetika-valecha-b2594a14a/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/geetika0101?tab=repositories"><img src={navIcon2} alt="" /></a>
                <a href={ResumeDoc} download="MyResumeDoc" ><img src={navIcon3} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
