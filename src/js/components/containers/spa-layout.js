import React, { Component } from "react";
import SolnsContainer from "./solns-container";

export default class SpaLayout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>The Solns:</h1>
        <SolnsContainer />
    </div>
    );
  }
}
