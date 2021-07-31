import React, { Component } from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

class MyReads extends Component {
  render() {
    const { books, shelves, onShelfChange } = this.props;
    console.log(books, shelves);
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf) => {
            return (
              <BookShelf
                key={shelf.id}
                books={books}
                shelf={shelf}
                onShelfChange={onShelfChange}
              />
            );
          })}
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MyReads;
