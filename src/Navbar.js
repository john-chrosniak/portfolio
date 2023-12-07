import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/racing-logo.jpeg';
import PDF from './Brianna-Heckert-Resume.pdf';

const NavbarCustom = () => {
  return (
    <Navbar expand="lg" style={{backgroundColor: "#232D4B"}} className="py-4 navbar-dark">
      <Container>
        <Navbar.Brand href="/"><img src={logo} width="70" height="70" className="d-inline-block align-top"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/home">Home</Nav.Link> {/*TODO: change to racecar icon or something */}
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href={PDF} target = "_blank">Resume</Nav.Link> {/*TODO: link to pdf resume*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavbarCustom;