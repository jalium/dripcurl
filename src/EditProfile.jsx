import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedEditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shampooInput: "",
      conditionerInput: "",
      leaveInInput: "",
      treatmentsInput: "",
      stylersInput: "",
      pic: null
    };
  }
  handleShampooInputChange = evt => {
    this.setState({ shampooInput: evt.target.value });
  };
  handleConditionerInputChange = evt => {
    this.setState({ conditionerInput: evt.target.value });
  };
  handleLeaveInInputChange = evt => {
    this.setState({ leaveInInput: evt.target.value });
  };
  handleTreatmentsInputChange = evt => {
    this.setState({ treatmentsInput: evt.target.value });
  };
  handleStylersInputChange = evt => {
    this.setState({ stylersInput: evt.target.value });
  };
  handleSubmitProducts = async evt => {
    evt.preventDefault();
    console.log("products submitted");
    let data = new FormData();
    data.append("shampoo", this.state.shampooInput);
    data.append("conditioner", this.state.conditionerInput);
    data.append("leaveIn", this.state.leaveInInput);
    data.append("treatments", this.state.treatmentsInput);
    data.append("stylers", this.state.stylersInput);
    let response = await fetch("/editProfile", {
      method: "POST",
      body: data,
      credentials: "include"
    });
    let resText = await response.text();
    console.log("/editProfile response ", resText);
    let body = JSON.parse(resText);
    if (body.success) {
      this.props.dispatch({
        type: "products",
        shampoo: body.shampoo,
        conditioner: body.conditioner,
        leaveIn: body.leaveIn,
        treatments: body.treatments,
        stylers: body.stylers
      });
      this.props.history.push("/profile");
    }
  };
  handlePicChange = evt => {
    this.setState({ pic: evt.target.files[0] });
  };
  handleSubmitPic = async evt => {
    evt.preventDefault();
    console.log("photo submitted");
    let data = new FormData();
    data.append("profilePic", this.state.pic);
    let response = await fetch("/editProfile", {
      method: "POST",
      body: data,
      credentials: "include"
    });
    let resText = await response.text();
    console.log("/editProfile response ", resText);
    let body = JSON.parse(resText);
    if (body.success) {
      this.props.dispatch({
        type: "user",
        username: body.username,
        cookie: this.props.cookie,
        frontendPath: body.frontendPath
      });
      this.props.history.push("/profile");
    }
  };

  render = () => {
    return (
      <div className="signup-container">
        <div className="signup-header">
          <h1>Edit your profile</h1>
          <div id="flex">
            <form className="signup" onSubmit={this.handleSubmitPic}>
              <label>Add a profile picture</label>
              <input
                className="input-file"
                type="file"
                name="profilePic"
                onChange={this.handlePicChange}
              />
              <input
                className="btn"
                type="submit"
                value="Update Profile Picture"
              />
            </form>
            <form
              className="edit-products"
              onSubmit={this.handleSubmitProducts}
            >
              <label>Shampoo</label>
              <input
                id="shampoo"
                type="text"
                onChange={this.handleShampooInputChange}
              />
              <label>Conditioner</label>
              <input
                id="conditioner"
                type="text"
                onChange={this.handleConditionerInputChange}
              />
              <label>Leave-In</label>
              <input
                id="leaveIn"
                type="text"
                placeholder={this.props.stylers}
                onChange={this.handleLeaveInInputChange}
              />
              <label>Treatments</label>
              <input
                id="treatments"
                type="text"
                placeholder={this.props.treatments}
                onChange={this.handleTreatmentsInputChange}
              />
              <label>Stylers</label>
              <input
                id="stylers"
                type="text"
                placeholder={this.props.stylers}
                onChange={this.handleStylersInputChange}
              />
              <input
                className="edit-btn"
                type="submit"
                value="Update Products"
              />
            </form>
          </div>
        </div>
      </div>
    );
  };
}

let mapStateToProps = st => {
  return {
    authenticated: st.authenticated,
    username: st.username,
    cookie: st.cookie,
    pattern: st.pattern,
    texture: st.texture,
    porosity: st.porosity,
    shampoo: st.shampoo,
    conditioner: st.conditioner,
    leaveIn: st.leaveIn,
    treatments: st.treatments,
    stylers: st.stylers,
    frontendPath: st.frontendPath
  };
};

let EditProfile = connect(mapStateToProps)(UnconnectedEditProfile);
export default EditProfile;
