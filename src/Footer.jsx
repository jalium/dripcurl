import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedFooter extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <div>
        <h1>Footer</h1>
      </div>
    );
  };
}
let mapStateToProps = st => {
  return {
    authenticated: st.authenticated
  };
};
let Footer = connect(mapStateToProps)(UnconnectedFooter);
export default Footer;
