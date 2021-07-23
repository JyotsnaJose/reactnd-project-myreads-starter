import React from "react";
// import * as BooksAPI from './BooksAPI'
import SearchBooks from "./Components/SearchBooks";
import MyReads from "./Components/MyReads";
import { Switch, Route } from "react-router";
import "./App.css";

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <MyReads />
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
