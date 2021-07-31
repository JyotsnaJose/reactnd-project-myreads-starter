import React from "react";
import SearchBooks from "./Components/SearchBooks";
import MyReads from "./Components/MyReads";
import { Switch, Route } from "react-router";
import { getAll, update } from "./BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    allBooks: [],
  };

  onShelfChange = (book, shelf) => {
    update(book, shelf).then((books) => console.log(books));
    const updatedBooks = this.state.allBooks.map((updatedBook) => {
      if (updatedBook.id === book.id) {
        updatedBook.shelf = shelf;
      }
      return updatedBook;
    });
    this.setState({ allBooks: updatedBooks });
  };

  componentDidMount() {
    getAll().then((data) => {
      this.setState({ allBooks: data });
    });
  }

  render() {
    const shelves = [
      { id: "currentlyReading", title: "Currently Reading" },
      { id: "wantToRead", title: "Want To Read" },
      { id: "read", title: "Read" },
    ];
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <MyReads
              books={this.state.allBooks}
              shelves={shelves}
              onShelfChange={this.onShelfChange}
            />
          </Route>
          <Route exact path="/search">
            <SearchBooks />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
