import React from "react";
// import * as BooksAPI from './BooksAPI'
import SearchBooks from "./Components/SearchBooks";
import MyReads from "./Components/MyReads";
import { Switch, Route } from "react-router";
import { getAll } from "./BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    allBooks: [],
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
            <MyReads books={this.state.allBooks} shelves={shelves} />
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
