import React, { Component } from "react";
import Header from "./Header";
import BookShelf from "./BookShelf";
import { getAll } from "../BooksAPI";

class MyReads extends Component {
  componentDidMount() {
    try {
      const books = getAll();
      console.log(books);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <BookShelf title="Currently Reading" />
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default MyReads;
