import React, { Component } from "react";
import "./style.scss";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

interface state {
  startDate: Date;
  age: number;
  Name: string;
}

interface PropsFromDispatch {
  onSubmitClick: () => any;
}

type AllProps = PropsFromDispatch;

const Selectoptions = [
  { value: "default", label: "Please-Select" },
  { value: "engineer", label: "SoftwareEngineer" },
  { value: "Analyst", label: "ITAnalyst" },
  { value: "Trainee", label: "TraineeSoftwreEngineer" },
];

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
      Name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ Name: evt.currentTarget.value });

  handleChange(date) {
    this.setState({
      startDate: date,
      age: calculate_age(date),
    });
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
                <input
                  name="fullname"
                  onChange={this.changeHandler}
                  value={this.state.Name}
                ></input>
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
              <input name="occupation" value="Software Engineer"></input>
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
