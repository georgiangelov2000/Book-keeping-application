import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <>
      <Nav className="bg-dark mb-5">
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link className="text-white">Books</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
          <LinkContainer to="/create-book">
            <Nav.Link className="text-white">Create Book</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
          <LinkContainer to="/register">
            <Nav.Link className="text-white">Register</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
          <LinkContainer to="/login">
            <Nav.Link className="text-white">Login</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
          <LinkContainer to="/logout">
            <Nav.Link className="text-white">Logout</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        
        <Nav.Item>
          <LinkContainer to="/update-profile">
            <Nav.Link className="text-white">Update Profile</Nav.Link>
          </LinkContainer>
        </Nav.Item>

      </Nav>
    </>
  );
};

export default Navigation;
