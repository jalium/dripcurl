import React, { Component } from "react";
import { connect } from "react-redux";
import StepOne from "./StepOne.jsx";
import StepTwo from "./StepTwo.jsx";
import StepThree from "./StepThree.jsx";

class UnconnectedCurlType extends Component {
  constructor(props) {
    super(props);
    this.state = { currentStep: 1, pattern: "", type: "", porosity: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleHairType = this.handleHairType.bind(this);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  _next() {
    let currentStep = this.state.currentStep;
    currentStep >= 2 ? 3 : currentStep++;
    console.log(currentStep);
    this.setState({ currentStep: currentStep });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    currentStep <= 1 ? 1 : currentStep--;
    console.log(currentStep);
    this.setState({ currentStep: currentStep });
  }

  get previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button className="btn-back" type="button" onClick={this._prev}>
          Go Back
        </button>
      );
    }
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button className="btn-next" type="button" onClick={this._next}>
          Next
        </button>
      );
    }
    return null;
  }

  handleHairType(evt) {
    evt.preventDefault();
    const { name, alt } = evt.target;
    console.log("type target: " + evt.target.alt);
    this.setState({ [name]: alt });
  }

  handleChange(evt) {
    const { name, value } = evt.target;
    console.log("target: " + evt.target.value);
    this.setState({
      [name]: value
    });
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const { pattern, type, porosity } = this.state;
    console.log("selections: " + pattern, type, porosity);
  };

  render() {
    return (
      <>
        <p>Step {this.state.currentStep} </p>
        <form onSubmit={this.handleSubmit}>
          <StepOne
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            pattern={this.state.pattern}
          />

          <StepTwo
            currentStep={this.state.currentStep}
            handleHairType={this.handleHairType}
            pattern={this.state.pattern}
            type={this.state.type}
          />

          <StepThree
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            type={this.state.porosity}
          />
          {this.previousButton}
          {this.nextButton}
        </form>
      </>
    );
  }
}

let mapStateToProps = st => {
  return {
    authenticated: st.authenticated
  };
};
let CurlType = connect(mapStateToProps)(UnconnectedCurlType);
export default CurlType;
