import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

const CreateBook = () => {
  let history = useHistory();
  const [book, setBook] = useState({
    author: "",
    title: "",
    category: "",
    description: "",
    img: "",
  });
  const [errorAuth, setErrorAuth] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorCategory, setErrorCategory] = useState("");
  const [errorDesc, setErrorDesc] = useState("");
  const [errorImg, setErrorImg] = useState("");

  const { author, title, category, description, img } = book;

  const onChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/books/create", book)
      .then((res) => {
        setBook(res.data);
        history.push("/");
      })
      .catch((error) => {
        const errors = error.response.data;
        console.log(errors);
        for (let i in errors) {
          console.log(errors[i]);
          const errorsArray = errors[i];

          for (let i = 0; i < errorsArray.length; i++) {
            setErrorAuth(errorsArray[0].msg);
            setErrorTitle(errorsArray[1].msg);
            setErrorCategory(errorsArray[4].msg);
            setErrorDesc(errorsArray[2].msg);
            setErrorImg(errorsArray[3].msg);
          }
        }
      });
  };

  return (
    <Container className="m-auto">
      <Row className="justify-content-center">
        <Col xs={6}>
          <h5>Create Book</h5>
          <Card border="primary" className="bg-primary">
            <Form onSubmit={onSubmit} className="m-5">
              <Form.Group className="mb-1" controlId="exampleForm.AuthorInput1">
                <Form.Label className="text-white">Author</Form.Label>
                <Form.Control
                  value={author}
                  onChange={onChange}
                  type="text"
                  name="author"
                />
              </Form.Group>
              {errorAuth ? <small className="text-warning">{errorAuth}</small> : null}

              <Form.Group className="mb-1" controlId="exampleForm.TitleInput1">
                <Form.Label  className="text-white">Title</Form.Label>
                <Form.Control
                  value={title}
                  onChange={onChange}
                  type="text"
                  name="title"
                />
              </Form.Group>
              {errorTitle ? <small className="text-warning">{errorTitle}</small> : null}

              <Form.Group className="mb-1" controlId="exampleForm.DescriptionInput1">
                <Form.Label className="text-white">Description</Form.Label>
                <Form.Control
                  value={description}
                  onChange={onChange}
                  type="text"
                  name="description"
                />
              </Form.Group>
              {errorDesc ? <small className="text-warning">{errorDesc}</small> : null}

              <Form.Group className="mb-1" controlId="exampleForm.ImgInput1">
                <Form.Label className="text-white">Image Url</Form.Label>
                <Form.Control
                  value={img}
                  onChange={onChange}
                  type="text"
                  name="img"
                />
              </Form.Group>
              {errorImg ? <small className="text-warning">{errorImg}</small> : null}

              <Form.Group className="mb-1" controlId="exampleForm.ControlSelect1">
                <Form.Label className="text-white">Category</Form.Label>
                <Form.Control
                  onChange={onChange}
                  as="select"
                  value={category}
                  name="category"
                >
                  <option value="IT">IT</option>
                  <option value="BUSSINES">Bussines</option>
                  <option value="ART">Art</option>
                  <option value="HISTORY">History</option>
                  <option value="ROMANCE">Romance</option>
                </Form.Control>
              </Form.Group>
              {errorCategory ? <small className="text-warning">{errorCategory}</small> : null}

              <Button variant="dark" className="mt-3" type="submit" block>
                Create Book
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateBook;
