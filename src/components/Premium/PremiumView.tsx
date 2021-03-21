import React, { Component } from "react";
import "./style.scss";

interface Props {
  productsLength: number;
}

interface PropsFromDispatch {
  onSubmitClick: () => any;
}

type AllProps = PropsFromDispatch;
class PremiumView extends React.Component<AllProps> {
  public render() {
    return (
      <div className="form">
        <table>
          <tr>
            <td>
              <h1>TAL Premium Calculator</h1>
            </td>
          </tr>
          <tr>
            <label>Name </label>
            <input name="fullname"></input>
          </tr>
          <tr>
            <label>Age </label>
            <input name="age"></input>
          </tr>
          <tr>
            <label>DOB </label>
            <input name="dob"></input>
          </tr>
          <tr>
            <label>Occupation </label>
            <input name="occupation"></input>
          </tr>

          <tr>
            <label>SumInsured </label>
            <input name="suminsured"></input>
          </tr>
        </table>
        <button onClick={this.props.onSubmitClick}>Submit</button>
      </div>
    );
  }
}

export default PremiumView;
