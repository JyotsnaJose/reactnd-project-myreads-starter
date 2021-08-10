import React, { Component } from "react";
import ShelfChanger from "./ShelfChanger";
import PropTypes from "prop-types";

class BookList extends Component {
  render() {
    const { book, shelf, onShelfChange } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks &&
                  book.imageLinks.smallThumbnail})`,
              }}
            />
            <ShelfChanger
              shelf={shelf}
              book={book}
              onShelfChange={onShelfChange}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors && book.authors.join(", ")}
          </div>
        </div>
      </li>
    );
  }
}

BookList.propTypes = {
  shelf: PropTypes.array,
  book: PropTypes.array,
  onShelfChange: PropTypes.func,
};

export default BookList;
