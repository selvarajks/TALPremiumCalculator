import React, { Component } from "react";
import "./style.scss";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  productsLength: number;
}
interface state {
  startDate: Date;
  age: number;
}

interface PropsFromDispatch {
  onSubmitClick: () => any;
}

type AllProps = PropsFromDispatch;

const calculate_age = (dob) => {
  const birthDate = new Date(dob);
  const difference = Date.now() - birthDate.getTime();
  const age = new Date(difference);

  return Math.abs(age.getUTCFullYear() - 1970);
};

class PremiumView extends React.Component<AllProps, state> {
  constructor(props) {
    super(props);

    this.state = {
      startDate: new Date(),
      age: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
      age: calculate_age(date),
    });

    //this.state.age = calculate_age(date);
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  public render() {
    return (
      <div className="form">
        <table>
          <tbody>
            <tr>
              <td>
                <h1>TAL Premium Calculator</h1>
              </td>
            </tr>
            <tr>
              <td>
                <label>Name </label>
                <input name="fullname"></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Age </label>
                <input name="age" value={this.state.age}></input>
              </td>
            </tr>
            <tr>
              <label>DOB </label>
              <Datepicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                name="startDate"
                dateFormat="MM/dd/yyyy"
              />
            </tr>
            <tr>
              <label>Occupation </label>
              <input name="occupation"></input>
            </tr>

            <tr>
              <label>SumInsured </label>
              <input name="suminsured"></input>
            </tr>
          </tbody>
        </table>
        <button onClick={this.onFormSubmit}>Submit</button>
      </div>
    );
  }
}

export default PremiumView;
