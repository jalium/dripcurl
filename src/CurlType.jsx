import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import StepOne from "./StepOne.jsx";
import StepTwo from "./StepTwo.jsx";
import StepThree from "./StepThree.jsx";

class UnconnectedCurlType extends Component {
  constructor(props) {
    super(props);
    this.state = { currentStep: 1, pattern: "", texture: "", porosity: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleHairType = this.handleHairType.bind(this);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  _next() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    console.log(currentStep);
    this.setState({ currentStep: currentStep });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
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

  get submitButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 3) {
      return (
        <button
          className="btn-submit"
          type="submit"
          onClick={this.handleSubmit}
        >
          Find your hair community
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

  handleSubmit = async evt => {
    evt.preventDefault();
    const { pattern, texture, porosity } = this.state;
    console.log("selections: " + pattern, texture, porosity);
    let data = new FormData();
    data.append("pattern", pattern);
    data.append("texture", texture);
    data.append("porosity", porosity);
    //data.append("username", this.props.username);
    let response = await fetch("/curlType", {
      method: "POST",
      body: data,
      credentials: "include"
    });
    let resText = await response.text();
    console.log("/curlType response", resText);
    let body = JSON.parse(resText);
    if (body.success) {
      this.props.dispatch({
        type: "curlType",
        pattern: pattern,
        texture: texture,
        porosity: porosity
      });
      this.props.history.push("/dashboard");
    }
  };

  render() {
    return (
      <div className="signup-container">
        <div className="signup-header">
          <h1>Step {this.state.currentStep}</h1>
          <div className="signup">
            <form className="curl-form" onSubmit={this.handleSubmit}>
              <StepOne
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                pattern={this.state.pattern}
              />

              <StepTwo
                currentStep={this.state.currentStep}
                handleHairType={this.handleHairType}
                pattern={this.state.pattern}
                texture={this.state.texture}
              />

              <StepThree
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                porosity={this.state.porosity}
              />
            </form>
          </div>
          {this.previousButton}
          {this.nextButton}
          {this.submitButton}
        </div>
      </div>
    );
  }
}

let mapStateToProps = st => {
  return {
    authenticated: st.authenticated,
    uername: st.username,
    pattern: st.pattern,
    texture: st.texture,
    porosity: st.porosity
  };
};
let CurlType = connect(mapStateToProps)(UnconnectedCurlType);
export default withRouter(CurlType);
