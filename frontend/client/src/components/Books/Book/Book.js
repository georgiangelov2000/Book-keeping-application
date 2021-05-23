import React from "react";

const Book = ({ category, author, title }) => {
  return (
    <tr>
      <td>{author}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

export default Book;
