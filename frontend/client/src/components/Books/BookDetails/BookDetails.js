import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Badge, Col, Row, Button } from "react-bootstrap";
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
    <div>
      <Col xs="3" className="mb-5 pb-5 text-center m-auto">
        <Col>
          <span className="text-secondary">Title: </span>
          <small>{book.title}</small>
        </Col>

        <Col>
          <span className="text-secondary">Category: </span>
          <small>{book.category}</small>
        </Col>
        <img width="100%" className="mb-2" src={book.img} alt="" />
        <Col>
          <span className="text-secondary">Description: </span>
        </Col>
        <Col>
          <small>{book.description}</small>
        </Col>

        <span className="text-secondary">Author: </span>
        <small>{book.author}</small>
      </Col>
    </div>
  );
};

export default BookDetails;
