import React, { Component } from "react";

class StepThree extends Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    return (
      <div className="form-group">
        <label>How porous is your hair?</label>
        <div>Describe high porosity</div>
        <input
          type="button"
          name="porosity"
          value="high"
          onClick={this.props.handleChange}
        />
        <div>Describe low porosity</div>
        <input
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
