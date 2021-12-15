import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/ClapperboardColor.svg/1024px-ClapperboardColor.svg.png"
              width="30"
              height="30"
              className="d-inline-block"
            />{" "}
            &nbsp; <b>My Show App</b>
          </Navbar.Brand>

          <Nav className="me-auto">
            <a href="/">
              <i className="fa fa-fw fa-home"></i> Home
            </a>

            <a href="/search">
              <i className="fa fa-fw fa-search"></i> Search
            </a>

            <a href="/contact">
              <i className="fa fa-fw fa-envelope"></i> Contact
            </a>
          </Nav>

          <Nav placement="end">
            <a href="/login">
              <i className="fa fa-fw fa-user"></i> Login
            </a>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
