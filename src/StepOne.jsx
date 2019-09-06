import React, { Component } from "react";

class StepOne extends Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div>
        <label>How curly is your hair?</label>
        <input
          className={"step-one " + (this.props.pattern === "wavy" ? "active" : "")}
          type="button"
          name="pattern"
          value="wavy"
          onClick={this.props.handleChange}
        />
        <input
          className={"step-one " + (this.props.pattern === "curly" ? "active" : "")}
          type="button"
          name="pattern"
          value="curly"
          onClick={this.props.handleChange}
        />
        <input
          className={"step-one " + (this.props.pattern === "coily" ? "active" : "")}
          type="button"
          name="pattern"
          value="coily"
          onClick={this.props.handleChange}
        />
      </div>
    );
  }
}

export default StepOne;
