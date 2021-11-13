import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOutUser } = useAuth();
  const logoutHandeler = () => {
    logOutUser();
  };
  return (
    <Navbar expand="lg">
      <Container className="py-3">
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/09/logo.png"
            width="100"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/watches">
              Watches
            </Nav.Link>
            {user.email && (
              <Nav.Link as={NavLink} to="/dashboard">
                Dashboard
              </Nav.Link>
            )}
            {!user.email && (
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            )}
            {!user.email && (
              <Nav.Link as={NavLink} to="/register">
                Register
              </Nav.Link>
            )}

            {user.email && (
              <Nav.Link>
                <div className="px-3 fs-4 d-inline py-1 text-white rounded-circle bg-success">
                  {user.displayName ? user.displayName.slice(0, 1) : "S"}
                </div>
                <div className="d-inline fs-4 mx-2" onClick={logoutHandeler}>
                  <FaSignInAlt />
                </div>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
