import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedLanding extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <div>
        <div>
          <header className="main-menu" /*style="transform:translateY(0vh)"*/>
            <p>
              Here to help you unleash <br /> your best curls
            </p>
            <nav>
              <ul>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/signup">Sign up</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <div className="content-outer">
          <header className="dripcurl-logo">
            <p>DRIPCURL</p>
          </header>
          <img src="/curlImages/Image-1.png" />
          <img src="/curlImages/Image-2.png" />
          <img src="/curlImages/Image-3.png" />
        </div>
      </div>
    );
  };
}
let mapStateToProps = st => {
  return {
    authenticated: st.authenticated
  };
};
let Landing = connect(mapStateToProps)(UnconnectedLanding);
export default Landing;
