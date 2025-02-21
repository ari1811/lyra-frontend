import Link from 'next/link';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#0B1C39' }} variant="dark">
      <Container>
        <Navbar.Brand href="/" className="text-warning fw-bold">
          LYRA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="text-light">About</Nav.Link>
            <Nav.Link href="#" className="text-light">Products</Nav.Link>
            <Nav.Link href="#" className="text-light">Performance</Nav.Link>
            <Nav.Link href="#" className="text-light">News</Nav.Link>
            <Nav.Link href="#" className="text-light">Contact</Nav.Link>
            <Button variant="outline-warning" className="ms-3">Invest With Us</Button>
            <Button variant="primary" className="ms-3" style={{ backgroundColor: '#0B1C39', borderColor: 'gold' }}>
              Stakeholders Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
