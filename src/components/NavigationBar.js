import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/images/bg/logo.png";

const NavigationBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} width="auto" height="45px" alt="Pala bapak kau" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#harry_potter">The Vans x Harry Potter</Nav.Link>
              <Nav.Link href="#sneakers">Sneakers</Nav.Link>
              <Nav.Link href="#apparel">Apparel</Nav.Link>

              <NavDropdown title="More" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#surf">Surf</NavDropdown.Item>
                <NavDropdown.Item href="#bmx">BMX</NavDropdown.Item>
                <NavDropdown.Item href="#skate">Skateboarding</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#about">About</NavDropdown.Item>
                <NavDropdown.Item href="#contact">Contact US</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link href="#register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;

/**
 * <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} width="auto" height="80px" alt="Pala bapak kau" />
          </Navbar.Brand>
          <Nav className="nav">
            <Nav.Link href="#trending">Sneakers</Nav.Link>
            <Nav.Link href="#bseller">Apparel</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
 */
