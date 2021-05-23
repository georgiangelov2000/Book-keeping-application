import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Image, Row, Col, Container, ListGroup } from "react-bootstrap";
import axios from "axios";

const BookDetails = () => {
  const [book, setBook] = useState({});

  const { _id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/books/book/${_id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Image src={book.img} rounded className="w-50" />
        </Col>
        <Col>
          <Row>
            <ListGroup variant="flush">
              <h5>Data Book: </h5>
              <ListGroup.Item>
                <h6>Author: </h6>
                {book.author}
              </ListGroup.Item>
              <ListGroup.Item>
                <h6>Title: </h6>
                {book.title}
              </ListGroup.Item>
              <ListGroup.Item>
                <h6>Description:</h6> 
                {book.description}
              </ListGroup.Item>
              <ListGroup.Item>
                <h6>Category:</h6> 
                {book.category}
              </ListGroup.Item>
            </ListGroup>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetails;
