import React, { Component } from "react";
import MovieTable from "../components/MovieTable.js";

class OpeningsTable extends Component {
  constructor(props) {
    super(props);
      this.state = {
        data: [
          { id: 1, title: "Sausage Party", text: "Showtimes" },
          { id: 2, title: "Cafe Society", text: "Showtimes" },
          { id: 3, title: "Morgan", text: "Showtimes" },
          { id: 4, title: "The 9th Life of Louis Drax", text: "Showtimes" },
          { id: 5, title: "Naam Hal Akira", text: "Showtimes" },
          { id: 6, title: "Equity", text: "Showtimes" },
          { id: 7, title: "Things To Come", text: "Showtimes" }
      ]
      };





  }

  handleButtonClick() {
    console.log('ButtonClicked');

  }


  render() {
    return (
      <div className="openings-table">
        <h1>{this.props.header}</h1>
        <MovieTable data={this.state.data} />
        <button onClick={this.handleButtonClick}>Get Showtimes</button>
      </div>
    );
  }

}

export default OpeningsTable;
