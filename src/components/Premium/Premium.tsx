import React, { Component } from "react";
import "./style.scss";
import PremiumView from "./PremiumView";

class Premium extends React.Component {
  onSubmitClick() {
    alert("on submit cliked");
  }
  public render() {
    return (
      <div className="shelf-container">
        <PremiumView onSubmitClick={this.onSubmitClick} />
      </div>
    );
  }
}

export default Premium;
