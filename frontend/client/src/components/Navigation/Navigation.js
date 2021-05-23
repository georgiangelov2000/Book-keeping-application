import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import UserContext from "../../context/context";

import axios from "axios";

const Navigation = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/authorization")
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(user);

  return (
    <>
      {!user ? (
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
        </Nav>
      ) : null}
    </>
  );
};

export default Navigation;
