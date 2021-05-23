import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import * as httpService from "../../../service/httpService";

const CreateBook = () => {
  
  const [book, setBook] = useState({
    author: "",
    title: "",
    category: "",
  });

  const{author, title, category}=book;

  const onChange=(e)=>setBook({...book,[e.target.name]:e.target.value});

  const onSubmit =  (e) => {
    e.preventDefault();
    httpService.createBook(book.author, book.title, book.category)
    console.log(book)
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

export default CreateBook;
