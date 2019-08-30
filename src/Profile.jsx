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
          <h3>Username: get from back end cookie or mongo db</h3>
          <p>Hair Type: get from mongodb</p>
        </div>
        <div>Profile picture: store filepath in mongodb</div>
        <p>Current Products: store / update in mongodb</p>
      </>
    );
  };
}
let mapStateToProps = st => {
  return {
    authenticated: st.authenticated,
    username: st.username
  };
};
let Profile = connect(mapStateToProps)(UnconnectedProfile);
export default withRouter(Profile);
