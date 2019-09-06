import React, { Component } from "react";

class StepTwo extends Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    } else if (this.props.pattern === "wavy") {
      return (
        <div>
          <label>Choose the photo that most ressembles your wavy hair</label>
          <input
            className={
              "curl-image " + (this.props.texture === "2a" ? "active-img" : "")
            }
            type="image"
            name="texture"
            alt="2a"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-2-WAVY-HAIR-2A.jpg"
            width="200px"
          />
          <input
            className={
              "curl-image " + (this.props.texture === "2b" ? "active-img" : "")
            }
            type="image"
            name="texture"
            alt="2b"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-2-WAVY-HAIR-2B.jpg"
            width="200px"
          />
          <input
            className={
              "curl-image " + (this.props.texture === "2c" ? "active-img" : "")
            }
            type="image"
            name="texture"
            alt="2c"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-2-WAVY-HAIR-2C.jpg"
            width="200px"
          />
        </div>
      );
    } else if (this.props.pattern === "curly") {
      return (
        <div>
          <label>Choose the photo that most ressembles your curly hair</label>
          <input
            className={
              "curl-image " + (this.props.texture === "3a" ? "active-img" : "")
            }
            type="image"
            name="texture"
            alt="3a"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-3-CURLY-HAIR-3A.jpg"
            width="200px"
          />
          <input
            className={
              "curl-image " + (this.props.texture === "3b" ? "active-img" : "")
            }
            type="image"
            name="texture"
            alt="3b"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-3-CURLY-HAIR-3B.jpg"
            width="200px"
          />
          <input
            className={
              "curl-image " + (this.props.texture === "3c" ? "active-img" : "")
            }
            type="image"
            name="texture"
            alt="3c"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-3-CURLY-HAIR-3C.jpg"
            width="200px"
          />
        </div>
      );
    } else if (this.props.pattern === "coily") {
      return (
        <div>
          <label>Choose the photo that most ressembles your coily hair</label>
          <input
            className={
              "curl-image " + (this.props.texture === "4a" ? "active-img" : "")
            }
            type="image"
            name="texture"
            alt="4a"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-4-COILY-HAIR-4A.jpg"
            width="200px"
          />
          <input
            className={
              "curl-image " + (this.props.texture === "4b" ? "active-img" : "")
            }
            type="image"
            name="texture"
            alt="4b"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-4-COILY-HAIR-4B.jpg"
            width="200px"
          />
          <input
            className={
              "curl-image " + (this.props.texture === "4c" ? "active-img" : "")
            }
            type="image"
            name="texture"
            alt="4c"
            onClick={this.props.handleHairType}
            src="/curlImages/TYPE-4-COILY-HAIR-4C.jpg"
            width="200px"
          />
        </div>
      );
    }
  }
}

export default StepTwo;
