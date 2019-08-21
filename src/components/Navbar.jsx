import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";

class Navbar2 extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">User Profile</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add">Add User</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Main Page</NavDropdown.Item>
              <NavDropdown.Item href="/add">Add Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/about">About Me</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbar2;
