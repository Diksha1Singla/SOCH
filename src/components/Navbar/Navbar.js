import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import "./Navbar.css";

function NavTop() {
  const [toogleMenu, setToogleMenu] = useState(false);

  function toogleOpen() {
    setToogleMenu(true);
  }

  function toogleClose() {
    setToogleMenu(false);
  }

  if (toogleMenu) {
    return (
      <>
        <NavTop />
        <div className="menu">
          <Container fluid className="menu-close">
            <button className="toogle-menu ms-auto" onClick={toogleClose}>
              <GrClose />
            </button>
            <div className="menu-list">
              <NavLink to="/soch" onClick={toogleClose}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={toogleClose}>
                About Soch
              </NavLink>
              <NavLink to="/whatwedo" onClick={toogleClose}>
                What We do 
              </NavLink>
              <NavLink to="/gallery" onClick={toogleClose}>
                Gallery
              </NavLink>
              <NavLink to="/contact" onClick={toogleClose}>
                Contact
              </NavLink>
            </div>
          </Container>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar className="navtop py-3" expand="lg">
        <Container fluid className="px-4">
          <Navbar.Brand className="navtop-brand">
            <Link to="/soch">
            SOCH
            </Link>
          </Navbar.Brand>
          <button className="toogle-menu" onClick={toogleOpen}>
            <FaAlignRight />
          </button>
          <Nav className="navtop-list ms-auto">
            <Nav.Link className="pe-3">
              <NavLink
                to="/soch"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link className="pe-3">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link className="pe-3">
              <NavLink
                to="/whatwedo"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                What We do 
              </NavLink>
            </Nav.Link>
            <Nav.Link className="pe-3">
              <NavLink
                to="/gallery"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Gallery
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTop;
