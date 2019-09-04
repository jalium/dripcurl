import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class UnconnectedProfile extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <>
        <div>
          <Link to="/dashboard">back to Dashboard</Link>
        </div>
        <div>
          <Link to="/editProfile">Edit Profile</Link>
        </div>
        <div>
          <h3>Hi, {this.props.username}</h3>
          <div>
            Hair Type:
            <ul>
              <li>{this.props.pattern}</li>
              <li>{this.props.texture}</li>
              <li>{this.props.porosity}</li>
            </ul>
          </div>
        </div>
        <img height="300px" src={this.props.frontendPath} />
        <div>
          Current Products:
          <ul>
            <li>{this.props.shampoo}</li>
            <li>{this.props.conditioner}</li>
            <li>{this.props.leaveIn}</li>
            <li>{this.props.stylers}</li>
            <li>{this.props.treatments}</li>
          </ul>
        </div>
      </>
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
let Profile = connect(mapStateToProps)(UnconnectedProfile);
export default withRouter(Profile);
