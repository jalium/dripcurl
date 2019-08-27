import React, { Component } from "react";
import { connect } from "react-redux";

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
    if (currentStep >= 2 ? 3 : currentStep++)
      this.setState({ currentStep: currentStep });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    if (currentStep <= 1 ? 1 : currentStep--)
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
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            pattern={this.state.pattern}
          />

          <Step2
            currentStep={this.state.currentStep}
            handleHairType={this.handleHairType}
            pattern={this.state.pattern}
            type={this.state.type}
          />

          <Step3
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

class Step1 extends Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div className="form-group">
        <label>How curly is your hair?</label>
        <input
          type="button"
          name="pattern"
          value="wavy"
          onClick={this.props.handleChange}
        />
        <input
          type="button"
          name="pattern"
          value="curly"
          onClick={this.props.handleChange}
        />
        <input
          type="button"
          name="pattern"
          value="coily"
          onClick={this.props.handleChange}
        />
      </div>
    );
  }
}

class Step2 extends Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    } else if (this.props.pattern === "wavy") {
      return (
        <div className="form-group">
          <label>Choose the photo that most ressembles your wavy hair</label>
          <input
            type="image"
            name="type"
            alt="2a"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-2-WAVY-HAIR-2A.jpg"
          />
          <input
            type="image"
            name="type"
            alt="2b"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-2-WAVY-HAIR-2B.jpg"
          />
          <input
            type="image"
            name="type"
            alt="2c"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-2-WAVY-HAIR-2C.jpg"
          />
        </div>
      );
    } else if (this.props.pattern === "curly") {
      return (
        <div className="form-group">
          <label>Choose the photo that most ressembles your curly hair</label>
          <input
            type="image"
            name="type"
            alt="3a"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-3-CURLY-HAIR-3A.jpg"
          />
          <input
            type="image"
            name="type"
            alt="2b"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-3-CURLY-HAIR-2B.jpg"
          />
          <input
            type="image"
            name="type"
            alt="2c"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-3-CURLY-HAIR-2C.jpg"
          />
        </div>
      );
    } else if (this.props.pattern === "coily") {
      return (
        <div className="form-group">
          <label>Choose the photo that most ressembles your coily hair</label>
          <input
            type="image"
            name="type"
            id="4a"
            src="/curlImages/TYPE-4-COILY-HAIR-4A.jpg/"
          />
        </div>
      );
    }
  }
}

class Step3 extends Component {
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
