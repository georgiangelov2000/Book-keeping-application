import React, { useState } from "react";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const { username, email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users/register", user)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        const errors = error.response.data;
        console.log(errors);
        for (let i in errors) {
          console.log(errors[i]);
          const errorsArray = errors[i];

          for (let i = 0; i < errorsArray.length; i++) {
            setErrorUsername(errorsArray[0].msg);
            setErrorEmail(errorsArray[1].msg);
            setErrorPassword(errorsArray[2].msg);
          }
        }
      });
  };

  return (
    <Container className="m-auto">
      <Row className="justify-content-center">
        <Col xs={6}>
          <h5>Register Form</h5>
          <Card border="primary" className="bg-primary">
            <Form onSubmit={onSubmit} className="m-5">
              <Form.Group className="mb-1" controlId="formBasicName">
                <Form.Label className="text-white">Name</Form.Label>
                <Form.Control
                  value={username}
                  onChange={onChange}
                  name="username"
                  type="text"
                  placeholder="Username"
                />
              </Form.Group>
              {errorUsername.length > 0 ? (
                <small className="text-warning">{errorUsername}</small>
              ) : (
                null
              )}

              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label className="text-white">Email address</Form.Label>
                <Form.Control
                  value={email}
                  onChange={onChange}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              {errorEmail.length > 0 ? (
                <small className="text-warning">{errorEmail}</small>
              ) : null}

              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control
                  value={password}
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={onChange}
                />
              </Form.Group>
              {errorPassword.length > 0 ? (
                <small className="text-warning">{errorPassword}</small>
              ) : null}

              <Button variant="dark" className="mt-3" type="submit" block>
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
