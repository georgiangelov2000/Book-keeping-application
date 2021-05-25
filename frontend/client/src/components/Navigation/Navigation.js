import React from "react";
import { Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <>
      <Nav className="bg-dark mb-1">
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
      </Nav>
    </>
  );
};

export default Navigation;
