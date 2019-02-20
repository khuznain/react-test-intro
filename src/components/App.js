import React, { Component } from "react";
import CommentBox from "./CommentBox";
import CommmentList from "./CommentList";
import "../App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentBox />
        <CommmentList />
      </div>
    );
  }
}

export default App;
