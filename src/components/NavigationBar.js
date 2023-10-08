import { Navbar, Container, Nav, Button, Image } from "react-bootstrap";
import logo from "../assets/images/bg/logo.png";
const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} width="auto" height="80px" alt="Pala bapak kau" />
          </Navbar.Brand>
          <Nav className="nav">
            <Nav.Link href="#trending">Special Edition</Nav.Link>
            <Nav.Link href="#bseller">Shoes</Nav.Link>
            <Nav.Link href="#">Clothing</Nav.Link>
            <Nav.Link href="#">Accessories</Nav.Link>
            <Nav.Link href="#">Skateboarding</Nav.Link>
            <Nav.Link href="#">More </Nav.Link>
            <Nav.Link href="#">Login </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
