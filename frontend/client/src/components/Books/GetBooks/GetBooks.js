import React, { useEffect, useState } from "react";
import { Container, Row, Table, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const GetBooks = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredBook, setFilteredBook] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    setFilteredBook(
      books.filter((currentBook) =>
        currentBook.title.toLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  }, [search, books]);

  const loadUsers = async () => {
    setLoading(true);
    const result = await axios.get("http://localhost:5000/api/books/allbooks");
    setBooks(result.data);
    const data = result.data;
    for (let i in data) {
      console.log(data[i]);
    }
    setLoading(false);
  };

  const deleteBook = async (_id) => {
    await axios.delete(`http://localhost:5000/api/books/delete/${_id}`);
    loadUsers();
  };

  return (
    <>
      {filteredBook.length <= 0 ? (
        <>
          <h5>Please add book !</h5>
          <Link to="/create-book">Create Book</Link>
        </>
      ) : (
        <Container>
          <h5>Books</h5>
          <Form.Control
            type="text"
            name="filter"
            placeholder="Filter"
            className="mb-3"
            onChange={(e) => setSearch(e.target.value)}
          />
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
                {filteredBook.map((book, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{book.author}</td>
                    <td>{book.title}</td>
                    <td>{book.category.toUpperCase()}</td>
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
      )}
    </>
  );
};

export default GetBooks;
