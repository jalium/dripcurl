import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedHeader extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <div>
        <h1>Header</h1>
        <div>
          <Link to="/signup">Sign up</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
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
let Header = connect(mapStateToProps)(UnconnectedHeader);
export default Header;
