import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header/Header";
import CreateBook from "./components/Books/CreateBook/CreateBook";
import GetBooks from "./components/Books/GetBooks/GetBooks";
import UpdateBook from "./components/Books/UpdateBook/UpdateBook";
import BookDetails from "./components/Books/BookDetails/BookDetails";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={GetBooks} />
        <Route path="/create-book" component={CreateBook} />
        <Route path="/book/:_id" component={BookDetails} />
        <Route path="/update/:_id" component={UpdateBook} />
      </Switch>
    </div>
  );
}

export default App;
