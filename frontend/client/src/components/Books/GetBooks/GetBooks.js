import React, { useEffect, useState } from "react";
import { Container, Row, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const GetBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/api/books/allbooks");
    setBooks(result.data);
    const data=result.data;
    for(let i in data){
      console.log(data[i]);
    }
  };

  const deleteBook = async (_id) => {
    await axios.delete(`http://localhost:5000/api/books/delete/${_id}`);
    loadUsers();
  };

  return (
    <Container>
      <h5>Books</h5>
      <Row>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Author</th>
              <th>Title</th>
              <th>Category</th>
              <th>Create Date </th>
              <th>Last Update </th>
              <th>Details Action</th>
              <th>Update Action</th>
              <th>Delete Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{book.author}</td>
                <td>{book.title}</td>
                <td>{book.category}</td>
                <td>{book.createdAt}</td>
                <td>{book.updatedAt}</td>
                <td>
                  <Link to={`/book/${book._id}`}>Details</Link>
                </td>
                <td>
                  <Link to={`/update/${book._id}`}>Update</Link>
                </td>
                <td>
                  <Button size="sm" onClick={() => deleteBook(book._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default GetBooks;
