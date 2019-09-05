import React, { Component } from "react";

class StepThree extends Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    return (
      <div>
        <label>How porous is your hair?</label>
        {/* <label>Describe high porosity</label> */}
        <input
          className="step-one"
          type="button"
          name="porosity"
          value="high"
          onClick={this.props.handleChange}
        />
        {/* <label>Describe medium porosity</label> */}
        <input
          className="step-one"
          type="button"
          name="porosity"
          value="medium"
          onClick={this.props.handleChange}
        />
        {/* <label>Describe low porosity</label> */}
        <input
          className="step-one"
          type="button"
          name="porosity"
          value="low"
          onClick={this.props.handleChange}
        />
      </div>
    );
  }
}

export default StepThree;
