import React, { useState } from "react";

import { Offcanvas, Navbar, Container ,Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <Navbar bg="light" expand="xxl">
      <Container fluid>
        <Navbar.Toggle onClick={handleShow} />
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Mutual Ride</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
         <Link to="/">Home</Link>
         <Link to="/my-rides">My Rides</Link>
         <Link to="/">Notification</Link>
         <Link to="/">Chat</Link>
         </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
