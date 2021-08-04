import React, { Component } from "react";
import BookList from "./BookList";

class BookShelf extends Component {
  render() {
    const { shelf, books, onShelfChange } = this.props;
    const booksInShelf = books.filter((book) => book.shelf === shelf.id);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksInShelf.map((book) => {
              return (
                <BookList
                  key={book.id}
                  book={book}
                  shelf={shelf.id}
                  onShelfChange={onShelfChange}
                />
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
