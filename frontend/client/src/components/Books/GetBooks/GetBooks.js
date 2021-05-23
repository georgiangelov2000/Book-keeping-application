import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import Book from "../Book/Book";

const GetBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books/allbooks")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
        <h5>Books</h5>
      <Row>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, id) => (
              <Book
                key={id}
                author={book.author}
                title={book.title}
                category={book.category}
              />
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default GetBooks;
