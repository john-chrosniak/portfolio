import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo.png';
import PDF from './John_Chrosniak_Resume.pdf';

const NavbarCustom = () => {
  return (
    <Navbar expand="lg" style={{backgroundColor: "#232D4B"}} className="py-4 navbar-dark">
      <Container>
        <Navbar.Brand href="/portfolio"><img src={logo} width="300" className="d-inline-block align-top"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link style={{color: "white"}} href="/portfolio">Home</Nav.Link>
            <Nav.Link style={{color: "white"}} href="/portfolio/#/about">About</Nav.Link>
            <Nav.Link style={{color: "white"}} href={PDF} target = "_blank">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavbarCustom;