import React, { Component } from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class MyReads extends Component {
  render() {
    const { books, shelves, onShelfChange } = this.props;

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

MyReads.propTypes = {
  books: PropTypes.array,
  shelves: PropTypes.array,
  onShelfChange: PropTypes.func,
};

export default MyReads;
