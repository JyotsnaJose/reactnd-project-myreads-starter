import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookList from "./BookList";
import PropTypes from "prop-types";

class SearchBooks extends Component {
  state = {
    searchInput: "",
  };

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value });
    this.props.onSearch(event.target.value);
  };

  render() {
    const {
      books,
      mybooks,
      noResults,
      onShelfChange,
      clearSearchBooks,
    } = this.props;

    const shelfUpdated = books.map((book) => {
      mybooks.map((mybook) => {
        if (book.id === mybook.id) {
          book.shelf = mybook.shelf;
        }
        return mybook;
      });
      return book;
    });

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={clearSearchBooks}>
              Close
            </button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.searchInput}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <div className="bookshelf-books">
            {noResults ? (
              <div className="no-results">No Results</div>
            ) : (
              <ol className="books-grid">
                {shelfUpdated.map((book) => {
                  return (
                    <BookList
                      key={book.id}
                      book={book}
                      shelf={book.shelf ? book.shelf : "none"}
                      onShelfChange={onShelfChange}
                    />
                  );
                })}
              </ol>
            )}
          </div>
        </div>
      </div>
    );
  }
}

SearchBooks.propTypes = {
  books: PropTypes.array,
  mybooks: PropTypes.array,
  noResults: PropTypes.bool,
  onShelfChange: PropTypes.func,
  clearSearchBooks: PropTypes.func,
};

export default SearchBooks;
