import React, { Component } from "react";

class StepThree extends Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    return (
      <div className="form-group">
        <label>How porous is your hair?</label>
        <p>Describe high porosity</p>
        <input type="button" name="high" value="High Porosity" />
        <p>Describe low porosity</p>
        <input type="button" name="low" value="Low Porosity" />
      </div>
    );
  }
}

export default StepThree;
