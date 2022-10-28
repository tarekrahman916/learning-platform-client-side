import React, { useContext, useState } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import logo from "../../../assets/images/logo.png";
import DarkModeToggle from "react-dark-mode-toggle";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {user?.displayName}
    </Tooltip>
  );

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className="navbar-brand" to="/">
          <Image
            roundedCircle
            className="m-0 p-0"
            style={{ width: "80px" }}
            src={logo}
          />
          Techno Academy
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/courses">
              Courses
            </Link>
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
            <Link className="nav-link" to="/faqs">
              FAQS
            </Link>
          </Nav>
          <Nav>
            <div className="text-center mb-2 mb-lg-0">
              {user?.photoURL && (
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Image
                    className="me-2 text-center"
                    style={{ width: "40px" }}
                    roundedCircle
                    src={user.photoURL}
                  />
                </OverlayTrigger>
              )}
            </div>
            {user && user?.uid ? (
              <Button
                onClick={handleSignOut}
                className="btn p-2"
                variant="primary"
                size="md"
              >
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button className="btn p-0" variant="primary p-2" size="md">
                  Login
                </Button>
              </Link>
            )}
          </Nav>
          <div className="d-flex ms-lg-3 mt-3 mt-lg-0">
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={60}
            />
            {isDarkMode ? (
              <p className="text-white ms-2">Dark</p>
            ) : (
              <p className="text-white ms-2">Light</p>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
