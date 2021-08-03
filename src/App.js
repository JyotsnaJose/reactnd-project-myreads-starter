import React from "react";
import SearchBooks from "./Components/SearchBooks";
import MyReads from "./Components/MyReads";
import { Switch, Route } from "react-router";
import { getAll, update, search } from "./BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    allBooks: [],
    searchBooks: [],
  };

  onShelfChange = (book, shelf) => {
    update(book, shelf);
    const updatedBooks = this.state.allBooks.map((updatedBook) => {
      if (updatedBook.id === book.id) {
        updatedBook.shelf = shelf;
      }
      return updatedBook;
    });
    this.setState({ allBooks: updatedBooks });
  };
  onSearch = (query) => {
    if (query.length > 0) {
      search(query).then((books) => {
        console.log(books);
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
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
            <SearchBooks
              books={this.state.searchBooks}
              onSearch={this.onSearch}
              onShelfChange={this.onShelfChange}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
