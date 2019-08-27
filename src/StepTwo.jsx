import React, { Component } from "react";

class StepTwo extends Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    } else if (this.props.pattern === "wavy") {
      return (
        <div className="form-group">
          <label>Choose the photo that most ressembles your wavy hair</label>
          <input
            type="image"
            name="texture"
            alt="2a"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-2-WAVY-HAIR-2A.jpg"
            height="100px"
            width="100px"
          />
          <input
            type="image"
            name="texture"
            alt="2b"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-2-WAVY-HAIR-2B.jpg"
            height="100px"
            width="100px"
          />
          <input
            type="image"
            name="texture"
            alt="2c"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-2-WAVY-HAIR-2C.jpg"
            height="100px"
            width="100px"
          />
        </div>
      );
    } else if (this.props.pattern === "curly") {
      return (
        <div className="form-group">
          <label>Choose the photo that most ressembles your curly hair</label>
          <input
            type="image"
            name="texture"
            alt="3a"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-3-CURLY-HAIR-3A.jpg"
            height="100px"
            width="100px"
          />
          <input
            type="image"
            name="texture"
            alt="3b"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-3-CURLY-HAIR-3B.jpg"
            height="100px"
            width="100px"
          />
          <input
            type="image"
            name="texture"
            alt="3c"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-3-CURLY-HAIR-3C.jpg"
            height="100px"
            width="100px"
          />
        </div>
      );
    } else if (this.props.pattern === "coily") {
      return (
        <div className="form-group">
          <label>Choose the photo that most ressembles your coily hair</label>
          <input
            type="image"
            name="texture"
            alt="4a"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-4-COILY-HAIR-4A.jpg"
            height="100px"
            width="100px"
          />
          <input
            type="image"
            name="texture"
            alt="4b"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-4-COILY-HAIR-4B.jpg"
            height="100px"
            width="100px"
          />
          <input
            type="image"
            name="texture"
            alt="4c"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-4-COILY-HAIR-4C.jpg"
            height="100px"
            width="100px"
          />
        </div>
      );
    }
  }
}

export default StepTwo;
