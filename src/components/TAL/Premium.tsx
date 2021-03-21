import React, { Component } from "react";
import "./style.scss";
import ShelfHeader from "../Premium/PremiumView";

class Premium extends Component {
  public render() {
    return (
      <div className="shelf-container">
        <ShelfHeader />
      </div>
    );
  }
}

export default Premium;
