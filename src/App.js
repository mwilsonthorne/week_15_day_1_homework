import React, { Component } from "react";
import OpeningsTable from "./containers/OpeningsTable.js";

class App extends Component {
  render()
  {
    return <OpeningsTable
        header="UK Opening This Week"
    />;
  }
}

export default App;
