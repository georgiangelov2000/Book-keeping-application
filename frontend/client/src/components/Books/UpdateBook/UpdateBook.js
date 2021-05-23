import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Container, Button } from "react-bootstrap";
import axios from "axios";

const UpdateBook = () => {
  let history = useHistory();
  const { _id } = useParams();
  const [book, setBook] = useState({
    author: "",
    title: "",
    category: "",
    description: "",
    img: "",
  });

  const { author, title, category, description, img } = book;

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/books/update/${_id}`, book);
    history.push("/");
  };

  const loadBooks = async () => {
    const res = await axios.get(`http://localhost:5000/api/books/book/${_id}`);
    setBook(res.data);
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <h5>Book Data: {title.toLocaleUpperCase()}</h5>
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
        </Form.Group>

        <Form.Group controlId="exampleForm.DescriptionInput1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={onChange}
            type="text"
            name="description"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ImageInput1">
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            value={img}
            onChange={onChange}
            type="text"
            name="img"
          />
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
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Create Book
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateBook;
