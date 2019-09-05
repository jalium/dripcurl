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
      <div>
        <div>
          <header className="main-menu">
            <p>Hi, {this.props.username}</p>
            <nav>
              <ul>
                <li>
                  <Link to="/dashboard">back to Dashboard</Link>
                </li>
                <li>
                  <Link to="/editProfile">Edit Profile</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <div className="content-outer">
          <header className="dripcurl-logo">
            <p>DRIPCURL</p>
          </header>
          <div className="profile">
            <img height="300px" src={this.props.frontendPath} />
            <div className="hair-type">
              <p>Your Hair Type: </p>
              <ul>
                <li>{this.props.pattern}</li>
                <li>{this.props.texture}</li>
                <li>{this.props.porosity}</li>
              </ul>
            </div>
            <div className="profile-products">
              <p>Your Fave Products:</p>
              <ul>
                <li>{this.props.shampoo}</li>
                <li>{this.props.conditioner}</li>
                <li>{this.props.leaveIn}</li>
                <li>{this.props.stylers}</li>
                <li>{this.props.treatments}</li>
              </ul>
            </div>
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
let Profile = connect(mapStateToProps)(UnconnectedProfile);
export default withRouter(Profile);
