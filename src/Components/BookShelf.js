import React, { Component } from "react";
import ShelfChanger from "./ShelfChanger";

class BookShelf extends Component {
  render() {
    const { shelf, books, onShelfChange } = this.props;
    const booksInShelf = books.filter((book) => book.shelf === shelf.id);
    console.log(booksInShelf);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksInShelf.map((book) => {
              return (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${
                            book.imageLinks.smallThumbnail
                          })`,
                        }}
                      />
                      <ShelfChanger
                        shelf={book.shelf}
                        book={book}
                        onShelfChange={onShelfChange}
                      />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors[0]}</div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
