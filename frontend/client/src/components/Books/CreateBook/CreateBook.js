import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import * as httpService from "../../../service/httpService";
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
  const [error, setError] = useState("");

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
        console.log(error);
        setError(error.msg);
      });
  };

  return (
    <Container>
      <h5>Create Book</h5>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="exampleForm.AuthorInput1">
          <Form.Label>Author</Form.Label>
          <Form.Control
            value={author}
            onChange={onChange}
            type="text"
            name="author"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.TitleInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={onChange}
            type="text"
            name="title"
          />
          {error ? <p>{error}</p> : null}
        </Form.Group>

        <Form.Group controlId="exampleForm.DescriptionInput1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={onChange}
            type="text"
            name="description"
          />
          {error ? <p>{error}</p> : null}
        </Form.Group>

        <Form.Group controlId="exampleForm.ImgInput1">
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            value={img}
            onChange={onChange}
            type="text"
            name="img"
          />
          {error ? <p>{error}</p> : null}
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Category</Form.Label>
          <Form.Control
            onChange={onChange}
            as="select"
            value={category}
            name="category"
          >
            <option value="it">IT</option>
            <option value="bussines">Bussines</option>
            <option value="art">Art</option>
            <option value="history">History</option>
            <option value="romance">Romance</option>
          </Form.Control>
          {error ? <p>{error}</p> : null}
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Create Book
        </Button>
      </Form>
    </Container>
  );
};

export default CreateBook;
