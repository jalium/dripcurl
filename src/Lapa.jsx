import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedLanding extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <div>
        <h1>Landing Page</h1>
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
