import React from "react";
import { useSelector } from "react-redux";
import { Nav, Navbar, Form } from "react-bootstrap";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

// Styles and Assets
import styles from "./navbar.module.css";

const NavBar = ({ handleShow }) => {
  const web3 = useSelector((state) => state.web3);
  let navigate = useNavigate();
  let params = window.location.pathname.split("/");

  let switchText =
    params[1] === "driver" ? "Switch to Passenger" : "Switch to Driver";

  const handleProfileSwitch = () => {
    if (!web3.user.isRider) {
      navigate("/register-passenger");
    }
    else if (!web3.user.isDriver) {
      navigate("/register-driver");
    }
    else if (params[1] === "passenger") {
      navigate("/driver");
    } else {
      navigate("/passenger");
    }
  };

  return (
    <Navbar className={styles.navbar} collapseOnSelect expand="md">
      <div style={{padding:"0 30px",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <Navbar.Brand>
        <div className={styles.logo}>
          <HiOutlineMenuAlt2
            className={styles.icon}
            onClick={handleShow}
            size={30}
          />
          Mutual Ride
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav style={{justifySelf:"flex-end"}}>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label={switchText}
              onChange={handleProfileSwitch}
              className={styles.switch}
            />
          </Form>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
