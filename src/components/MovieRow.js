import React, { Component } from "react";

class MovieRow extends Component {
  render() {
    return (
      <div className="movie-row">
      <h4 className="movie-title">{this.props.title}</h4>
      {this.props.children}
    </div>
    );
  }
}
 export default MovieRow;
