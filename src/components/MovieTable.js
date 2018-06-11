import React, { Component } from "react";
import MovieRow from "./MovieRow.js";

class MovieTable extends Component {
  render() {
    const movieNodes = this.props.data.map(movie => {
      return (
        <MovieRow title={movie.title} key={movie.id}>
          {movie.text}
        </MovieRow>
      );
    });

    return <div className="movie-table">
            {movieNodes}
          </div>
    
  }
}

export default MovieTable;
